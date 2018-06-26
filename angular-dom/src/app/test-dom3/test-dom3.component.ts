import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer,
  AfterViewInit
} from '@angular/core';
import {
  TestDom3ChildComponent
} from './test-dom3-child.component';

@Component({
  selector: 'test-dom3',
  templateUrl: './test-dom3.component.html',
  styleUrls: ['./test-dom3.component.html']
})

/**
 * 使用ViewChild来获取子组件
 */
export class TestDom3Component implements OnInit, AfterViewInit {
  @ViewChild(TestDom3ChildComponent)
  child: TestDom3ChildComponent;
  private defaultColor: string;
  private targetColor: string;
  div = null;
  div2 = null;
  div3 = null;

  constructor(private elementRef: ElementRef) {
    //默认颜色初始化
    this.defaultColor = 'red';
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.div = this.child.nativeElement;
    this.div2 = this.elementRef.nativeElement.querySelector('div#kk1');
    this.div3 = this.elementRef.nativeElement.querySelector('div.gg1');
    this.div.style.backgroundColor = 'green';
    this.div2.style.backgroundColor = 'green';
    this.div3.style.backgroundColor = 'green';
  }
  //change color
  changeColor(value: string): void {
    this.targetColor = value || this.defaultColor;
    this.div.style.backgroundColor = this.targetColor;
    this.div2.style.backgroundColor = this.targetColor;
    this.div3.style.backgroundColor = this.targetColor;
  }
}
