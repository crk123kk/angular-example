import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
@Component({
  selector: 'test-animation',
  templateUrl: './test-animation.component.html',
  styleUrls: ['./test-animation.component.css'],
  animations:[
    //在position状态改变时，触发动画
    trigger('position',[
      //position为left时的样式
      state('left',style({
        'margin-left': '0',
        'background-color':'yellow'
      })),
      //position为right时的样式
      state('right',style({
        'margin-left': '200px',
        'background-color':'blue'
      })),
      //状态切换时的动画设置
      transition('left => right',animate('1000ms ease-in')),
      transition('right => left',animate('1000ms ease-out'))
    ])
  ]
})
export class TestAnimationComponent implements OnInit {
  currentPosition = 'left';
  constructor() { }
  ngOnInit() {
  }
  /**
   * 按钮事件，切换状态
   */
  togglePosition() {
    if(this.currentPosition === 'left') {
      this.currentPosition = 'right';
    }else {
      this.currentPosition = 'left';
    }
  }
}