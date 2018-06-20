import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showContent = '';
  myDataDate = new Date();
  myJson = { "name":'kk',"age":'12'};

  public show(str) {
    this.showContent = str;
  }
}
