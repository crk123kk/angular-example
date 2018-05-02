/**
 * Created by laixiangran on 2016/8/7.
 * homepage：http://www.laixiangran.cn
 */
import { Injectable } from '@angular/core';

/**
 * 坐标对象接口
 */
interface Location {
	lat: number,
	lng: number
}

/**
 * @name TransformService
 * @description earth(WGS-84) 与 china(GCJ-02)互转
 */
@Injectable()
export class TransformService {
	private earthR = 6378137.0;

	constructor() {}

	private outOfChina(lat: number, lng: number): boolean {
		if ((lng < 72.004) || (lng > 137.8347)) {
			return true;
		}
		if ((lat < 0.8293) || (lat > 55.8271)) {
			return true;
		}
		return false;
	}

	private transform(x: number, y: number): Location {
		const xy = x * y,
			absX = Math.sqrt(Math.abs(x)),
			xPi = x * Math.PI,
			yPi = y * Math.PI,
			d = 20.0 * Math.sin(6.0 * xPi) + 20.0 * Math.sin(2.0 * xPi);
		let lat = d, lng = d;

		lat += 20.0 * Math.sin(yPi) + 40.0 * Math.sin(yPi / 3.0);
		lng += 20.0 * Math.sin(xPi) + 40.0 * Math.sin(xPi / 3.0);

		lat += 160.0 * Math.sin(yPi / 12.0) + 320 * Math.sin(yPi / 30.0);
		lng += 150.0 * Math.sin(xPi / 12.0) + 300.0 * Math.sin(xPi / 30.0);

		lat *= 2.0 / 3.0;
		lng *= 2.0 / 3.0;

		lat += -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * xy + 0.2 * absX;
		lng += 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * xy + 0.1 * absX;

		return {lat: lat, lng: lng}
	}

	private delta(lat: number, lng: number): Location {
		const ee = 0.00669342162296594323,
			d = this.transform(lng - 105.0, lat - 35.0),
			radLat = lat / 180.0 * Math.PI;
		let magic = Math.sin(radLat);
		magic = 1 - ee * magic * magic;
		const sqrtMagic = Math.sqrt(magic);
		d.lat = (d.lat * 180.0) / ((this.earthR * (1 - ee)) / (magic * sqrtMagic) * Math.PI);
		d.lng = (d.lng * 180.0) / (this.earthR / sqrtMagic * Math.cos(radLat) * Math.PI);
		return d;
	}

	/**
	 * WGS-84转GCJ-02
	 * @param {number} wgsLat 纬度
	 * @param {number} wgsLng 经度
	 * @returns {{lat: number; lng: number}}
	 */
	wgs2gcj(wgsLat: number, wgsLng: number) {
		if (this.outOfChina(wgsLat, wgsLng)) {
			return {lat: wgsLat, lng: wgsLng};
		}
		const d = this.delta(wgsLat, wgsLng);
		return {lat: wgsLat + d.lat, lng: wgsLng + d.lng};
	}

	/**
	 * GCJ-02转WGS-84
	 * @param {number} gcjLat GCJ-02的纬度
	 * @param {number} gcjLng GCJ-02的经度
	 * @returns {{lat: number; lng: number}}
	 */
	gcj2wgs(gcjLat: number, gcjLng: number) {
		if (this.outOfChina(gcjLat, gcjLng)) {
			return {lat: gcjLat, lng: gcjLng};
		}
		const d = this.delta(gcjLat, gcjLng);
		return {lat: gcjLat - d.lat, lng: gcjLng - d.lng};
	}

	gcj2wgs_exact(gcjLat: number, gcjLng: number) {
		// newCoord = oldCoord = gcjCoord
		let newLat = gcjLat, newLng = gcjLng,
			oldLat = newLat, oldLng = newLng;
		const threshold = 1e-6; // ~0.55 m equator & latitude

		for (let i = 0; i < 30; i++) {
			// oldCoord = newCoord
			oldLat = newLat;
			oldLng = newLng;
			// newCoord = gcjCoord - wgs_to_gcj_delta(newCoord)
			const tmp = this.wgs2gcj(newLat, newLng);
			// approx difference using gcj-space difference
			newLat -= gcjLat - tmp.lat;
			newLng -= gcjLng - tmp.lng;
			// diffchk
			if (Math.max(Math.abs(oldLat - newLat), Math.abs(oldLng - newLng)) < threshold) {
				break;
			}
		}
		return {lat: newLat, lng: newLng};
	}

	/**
	 * GCJ-02转百度坐标
	 * @param {number} gcjLat GCJ-02的纬度
	 * @param {number} gcjLng GCJ-02的经度
	 * @returns {{lat: number; lng: number}}
	 */
	gcj2bd(gcjLat: number, gcjLng: number) {
		if (this.outOfChina(gcjLat, gcjLng)) {
			return {lat: gcjLat, lng: gcjLng};
		}

		const x = gcjLng,
			y = gcjLat,
			z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * Math.PI),
			theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * Math.PI),
			bdLng = z * Math.cos(theta) + 0.0065,
			bdLat = z * Math.sin(theta) + 0.006;

		return {lat: bdLat, lng: bdLng};
	}

	/**
	 * 百度坐标转GCJ-02
	 * @param {number} bdLat 百度的纬度
	 * @param {number} bdLng 百度的经度
	 * @returns {{lat: number; lng: number}}
	 */
	bd2gcj(bdLat: number, bdLng: number) {
		if (this.outOfChina(bdLat, bdLng)) {
			return {lat: bdLat, lng: bdLng};
		}

		const x = bdLng - 0.0065,
			y = bdLat - 0.006,
			z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * Math.PI),
			theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * Math.PI),
			gcjLng = z * Math.cos(theta),
			gcjLat = z * Math.sin(theta);

		return {lat: gcjLat, lng: gcjLng};
	}

	/**
	 * WGS-84转百度坐标
	 * @param {number} wgsLat 纬度
	 * @param {number} wgsLng 经度
	 * @returns {{lat: number; lng: number}}
	 */
	wgs2bd(wgsLat: number, wgsLng: number) {
		const gcj = this.wgs2gcj(wgsLat, wgsLng);
		return this.gcj2bd(gcj.lat, gcj.lng);
	}

	/**
	 * 百度坐标转WGS-84
	 * @param {number} bdLat 百度的纬度
	 * @param {number} bdLng 百度的经度
	 * @returns {{lat: number; lng: number}}
	 */
	bd2wgs(bdLat: number, bdLng: number) {
		const gcj = this.bd2gcj(bdLat, bdLng);
		return this.gcj2wgs(gcj.lat, gcj.lng);
	}

	distance(latA: number, lngA: number, latB: number, lngB: number) {
		const pi180 = Math.PI / 180,
			arcLatA = latA * pi180,
			arcLatB = latB * pi180,
			x = Math.cos(arcLatA) * Math.cos(arcLatB) * Math.cos((lngA - lngB) * pi180),
			y = Math.sin(arcLatA) * Math.sin(arcLatB);
		let s = x + y;
		if (s > 1) {
			s = 1;
		}
		if (s < -1) {
			s = -1;
		}
		const alpha = Math.acos(s), distance = alpha * this.earthR;
		return distance;
	}

	/**
	 * 将坐标由度分秒表示转为十进制表示
	 * @param dfm 度分秒表示，如180°0′0″
	 * @returns {number} 十进制，如180.00
	 */
	degree2Decimal(dfm: string): number {
		const lod = Number(dfm.split('°')[0]),
			lom = Number(dfm.split('°')[1].split('′')[0]),
			los = Number(dfm.split('°')[1].split('′')[1].split('″')[0]);

		return lod + lom / 60 + los / 3600;
	};

	/**
	 * 将坐标由十进制表示转为度分秒表示
	 * @param sjz 十进制表示，如180.00
	 * @returns {string} 度分秒表示，如180°0′0″
	 */
	decimal2Degree(sjz: number): string {
		const d = String(sjz).split('.'),
			f = String(Number('0.' + d[1]) * 60).split('.');

		return d[0] + '°' + f[0] + '′' + (Number('0.' + f[1]) * 60).toFixed(2) + '″';
	};
}
