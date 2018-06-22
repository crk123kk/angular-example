import {Component, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-childen',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildenComponent implements OnChanges {
  @Input() data: string;

  ngOnChanges() {
    console.log(this.data);
  }
}