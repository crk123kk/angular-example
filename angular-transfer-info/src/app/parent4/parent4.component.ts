import {Component} from '@angular/core';
import { GetDataService } from '../share/service/getData.service';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls:['./parent4.component.css']
})

export class Parent4Component {
  constructor(public getDataService: GetDataService) {
  }

  OnClick() {
    let a = this.getDataService.getData();
    alert(a + 'parent');
  }
}