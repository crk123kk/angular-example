import { Component} from '@angular/core';
import { GetDataService } from '../share/service/getData.service';

@Component({
  selector: 'app-childen4',
  templateUrl: './child4.component.html',
  styleUrls:['./child4.component.css']
})
export class Childen4Component {

  constructor(public getDataService: GetDataService) {
  }

  OnClick() {
    let a = this.getDataService.getData();
    alert(a + 'child');
  }

}