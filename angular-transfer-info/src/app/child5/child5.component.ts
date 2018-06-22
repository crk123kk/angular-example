import {Component} from '@angular/core';

@Component({
  selector: 'app-childen5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Childen5Component {
  childInfo = '我是子组件的属性childInfo';
  fun1() {
    alert('我是子组件的方法');
  }
}