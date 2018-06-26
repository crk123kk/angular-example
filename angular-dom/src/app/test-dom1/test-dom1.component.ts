import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'test-dom1',
    templateUrl: 'test-dom1.component.html',
    styleUrls:['./test-dom1.component.css']
})

/**
 * 简单的dome元素操作：改变背景色
 */
export class TestDom1Component {
    private defaultColor:string;
    private targetColor:string;

    constructor(private elementRef:ElementRef) {
        //默认颜色初始化
        this.defaultColor = 'red';
    }

    //change color
    changeColor(value:string):void {
        this.targetColor =  value || this.defaultColor;
        let Div = this.elementRef.nativeElement.querySelector('test-dom1-child div');
        let Div2 = this.elementRef.nativeElement.querySelector('div#kk1');
        let Div3 = this.elementRef.nativeElement.querySelector('div.gg1');
        Div.style.backgroundColor = this.targetColor;
        Div2.style.backgroundColor = this.targetColor;
        Div3.style.backgroundColor = this.targetColor;
    }
}