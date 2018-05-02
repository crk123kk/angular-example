import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TransformService } from '../../services/transform.service';

@Component({
	selector: 'app-lazy',
	templateUrl: './lazy.component.html',
	styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
	kfcList: any[] = [];

	constructor(public http: HttpClient,
				public transformService: TransformService) {
	}

	ngOnInit() {
		this.poiSearch('麦当劳', '北京市').subscribe((data: any) => {
			this.kfcList = data.pois;
		});
	}

	poiSearch(text: string, city?: string): Observable<any> {
		return this.http.get(encodeURI(`http://restapi.amap.com/v3/place/text?keywords=${text}&city=${city}&offset=20&key=55f909211b9950837fba2c71d0488db9&extensions=all`));
	}
}
