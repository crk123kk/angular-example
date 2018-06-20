/*
    指令功能描述：该指令实现的功能是将鼠标移动到绑定的元素上之后元素变色
    ex:
        <h1 prefixHighLight [prefixHighLight]="color">Hello {{name}}</h1>
*/
import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[prefixHighLight]'
})
export class HighlightDirective {
  //需要注意的是：这里的prefixHighLight不仅仅是指令的标识符，还是输入的绑定目标
  @Input('prefixHighLight') highlightColor: string;
  private _domElem: ElementRef;
  private _renderer: Renderer;
  private _defaultColor = 'red';

  constructor(elem: ElementRef, renderer: Renderer) {
    this._domElem = elem.nativeElement;
    this._renderer = renderer;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this._renderer.setElementStyle(this._domElem, 'backgroundColor', this.highlightColor || this._defaultColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._renderer.setElementStyle(this._domElem, 'backgroundColor', null);
  }
}