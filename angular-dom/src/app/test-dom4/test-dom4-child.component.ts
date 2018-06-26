import {
  Component,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'test-dom4-child',
  template: `<div></div>`,
  styles: [`
    div{
      width:100px;
      height:100px;
    }
  `]
})
export class TestDom4ChildComponent {
  nativeElement: any;
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    this.nativeElement = this.elementRef.nativeElement.querySelector('div');
  }
}
