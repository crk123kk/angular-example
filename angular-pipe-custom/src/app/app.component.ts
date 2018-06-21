import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myNumber = 2;
  showContent = '';
  mySex = 'male'

  public show(str) {
    this.showContent = str;
  }
}
