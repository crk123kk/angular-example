import { Component, OnInit, OnChanges, DoCheck } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector:'ngx-translate',
    templateUrl:'./nax-translate.component.html',
    styleUrls:['./ngx-translate.component.css']
})

export class NgxTranslateComponent implements OnInit,OnChanges,DoCheck{
    welcome = 'welcome';
    hello = 'hello';
    getName = 'getName';
    param = {'name':'ggg'};
    getInfo = 'getInfo';
    param3 = {'info1':'info11111','info2':'info22222'};
    welcomeStr = '{{welcome | translate}}';
    helloStr = '{{hello | translate}}';
    getNameStr = '{{getName | translate:{name:"crk"}}}'
    getInfoStr = '{{getInfo | translate:{"info1":"info11111","info2":"info22222"} }}'
    welcomeStr2 = '[translate]="welcome"';
    helloStr2 = '[translate]="hello"';
    getNameStr2 = '[translate]="getName" [translateParams]="param"'
    welcomeTranslate = '';
    helloTranslate = '';
    getNameTranslate = '';

    constructor(
        private translate : TranslateService
    ) {
    }

    ngOnInit() {
        // this.getTranslateInfo();
    }

    ngOnChanges() {
        // this.getTranslateInfo();
    }

    ngDoCheck() {
        this.getTranslateInfo();
    }

    public getTranslateInfo() {
        this.translate.get('welcome').subscribe((res: string) => {
            console.log(res);
            this.welcomeTranslate = res;
        });
        this.translate.get('hello').subscribe((res: string) => {
            console.log(res);
            this.helloTranslate = res;
        });
        this.translate.get('getName',this.param).subscribe((res: string) => {
            console.log(res);
            this.getNameTranslate = res;
        });
    }

}