import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer
} from '@angular/core';
import {
  TestDom4ChildComponent
} from './test-dom4-child.component';

@Component({
  selector: 'test-dom4',
  templateUrl: './test-dom4.component.html',
  styleUrls: ['./test-dom4.component.css']
})

export class TestDom4Component implements OnInit, AfterViewInit {
  @ViewChild(TestDom4ChildComponent)
  child: TestDom4ChildComponent;
  private defaultColor: string;
  private targetColor: string;
  div = null;
  div2 = null;
  div3 = null;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
  ) {
    //默认颜色初始化
    this.defaultColor = 'red';
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.div = this.child.nativeElement;
    this.div2 = this.elementRef.nativeElement.querySelector('div#kk1');
    this.div3 = this.elementRef.nativeElement.querySelector('div.gg1');
    this.renderer.setElementStyle(this.div, 'backgroundColor', 'pink');
    this.renderer.setElementStyle(this.div2, 'backgroundColor', 'pink');
    this.renderer.setElementStyle(this.div3, 'backgroundColor', 'pink');
  }

  //change color
  changeColor(value: string): void {
    this.targetColor = value || this.defaultColor;
    this.renderer.setElementStyle(this.div, 'backgroundColor', this.targetColor);
    this.renderer.setElementStyle(this.div2, 'backgroundColor', this.targetColor);
    this.renderer.setElementStyle(this.div3, 'backgroundColor', this.targetColor);
  }
}
