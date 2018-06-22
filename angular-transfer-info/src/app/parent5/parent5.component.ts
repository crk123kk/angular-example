import {Component, ViewChild} from '@angular/core';
import {Childen5Component} from '../child5/child5.component';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})

export class Parent5Component {
  @ViewChild(Childen5Component) child: Childen5Component;

  OnClick() {
    this.child.fun1();
  }
  getChildInfo() {
    alert(this.child.childInfo);
  }
}