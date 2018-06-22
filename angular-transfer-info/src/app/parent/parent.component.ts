import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls:['./parent.component.css']
})

export class ParentComponent {

  private user: Object = {
    name: '',
    age: '',
    number: ''
  };
  private parent_data: any;

  next() {
    this.parent_data = this.user;
  }

}