import { Directive, ElementRef, Renderer, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[autoFocus]'
})
export class AutoFocusDirective {
  @Input() autoFocusConent: any;
  private _domElem: ElementRef;
  private _renderer2: Renderer2;

  constructor(elem: ElementRef, renderer2: Renderer2) {
    this._domElem = elem.nativeElement;
    this._renderer2 = renderer2;
  }

  @HostListener('dblclick')
  ondblclick(){
    this._renderer2.setStyle(this.autoFocusConent, 'backgroundColor', 'red');
  }
}