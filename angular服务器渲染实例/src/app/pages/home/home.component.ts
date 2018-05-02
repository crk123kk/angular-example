import { Component, OnDestroy, OnInit } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const KFCLIST_KEY = makeStateKey('kfcList');

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	message: string;
	keyword: string = '肯德基';
	kfcList: any[] = [];

	constructor(public http: HttpClient,
				private state: TransferState) {
	}

	ngOnInit() {
		this.message = '欢迎进入首页！';

		// 采用一个标记来区分服务端是否已经拿到了数据，如果没拿到数据就在客户端请求，如果已经拿到数据就不发请求
		this.kfcList = this.state.get(KFCLIST_KEY, null as any);

		if (!this.kfcList || this.kfcList.length === 0) {
			this.poiSearch(this.keyword, '北京市').subscribe((data: any) => {
				this.kfcList = data.pois;
				this.state.set(KFCLIST_KEY, this.kfcList as any);
			});
		}
	}

	ngOnDestroy() {
		if (typeof window === 'object') {
			this.state.set(KFCLIST_KEY, null as any);
			this.kfcList = [];
		}
	}

	query() {
		this.keyword = this.keyword === '肯德基' ? '麦当劳' : '肯德基';
		this.poiSearch(this.keyword, '北京市').subscribe((data: any) => {
			this.kfcList = data.pois;
		});
	}

	poiSearch(text: string, city?: string): Observable<any> {
		return this.http.get(encodeURI(`http://restapi.amap.com/v3/place/text?keywords=${text}&city=${city}&offset=20&key=55f909211b9950837fba2c71d0488db9&extensions=all`));
	}
}
