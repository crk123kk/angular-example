import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  info = '';
  name = 'prefixHighLight';
  color = 'blue';

  public showSomethin() {
    this.info += '显示    '
  }
}
