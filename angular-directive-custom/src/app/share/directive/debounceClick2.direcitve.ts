/*
    1、ElementRef、Renderer2
    2、setTimeout(function(){},3000);
    3、setTimeout函数和this
    使用方式：
      <button doubleClick2 (click)=showSomethin()>防止抖动方式二</button>
*/
import { Directive, ElementRef, Renderer, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[doubleClick2]'
})
export class DoubleClickDirective2 {

  private _domElem: ElementRef;
  private _renderer2: Renderer2;

  constructor(elem: ElementRef, renderer2: Renderer2) {
    this._domElem = elem.nativeElement;
    this._renderer2 = renderer2;
  }

  @HostListener('click')
  onclick() {
    let _rend2 = this._renderer2;
    let _domE = this._domElem;
      
    _rend2.setStyle(_domE, 'backgroundColor', 'grey');
    _rend2.setAttribute(_domE, 'disabled', 'disabled');
      
    setTimeout(function(){
        _rend2.setStyle(_domE, 'backgroundColor', 'red');
        _rend2.removeAttribute(_domE, 'disabled');
    },3000);
  }
}