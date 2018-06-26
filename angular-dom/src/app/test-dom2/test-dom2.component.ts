import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'test-dom2',
  templateUrl: './test-dom2.component.html',
  styleUrls: ['./test-dom2.component.css']
})

/**
 * 对dome的操作：获取dome的时机，对dome进行初始化操作
 */
export class TestDom2Component implements OnInit, AfterViewInit {
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
    this.div = this.elementRef.nativeElement.querySelector('test-dom2-child div');
    this.div2 = this.elementRef.nativeElement.querySelector('div#kk1');
    this.div3 = this.elementRef.nativeElement.querySelector('div.gg1');
    this.div.style.backgroundColor = 'yellow';
    this.div2.style.backgroundColor = 'yellow';
    this.div3.style.backgroundColor = 'yellow';
  }

  //change color
  changeColor(value: string): void {
    this.targetColor = value || this.defaultColor;
    this.div.style.backgroundColor = this.targetColor;
    this.div2.style.backgroundColor = this.targetColor;
    this.div3.style.backgroundColor = this.targetColor;
  }
}
