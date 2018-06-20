import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular';
  fontColor = 'blue';
  fontBold = 'bold';
  fontBig = 'big';
  showWhat = 'class';
  content1 = "{'color': 'red'}";
  content2 = "{'color': fontColor}";
  content3 = "{'color': getColor(fontColor)}";
  content4 = "{'color': fontColor === 'blue' ? 'blue' : 'red'}";
  text1 = "{'text-red': true }";
  text2 = "{'text-red': fontColor === 'blue'}";
  text3 = "getTextColor('text-blue')";
  text4 = "fontColor === 'blue' ? 'text-blue' : 'text-red'";
  text5 = "{'text-blue': fontColor === 'blue','text-bold': fontBold === 'bold','text-big': fontBig === 'big'}";
  testArray = ['1','2','3','4','5'];
  radioColor = 'green';

  public getColor(color) {
    return color;
  }

  public showSomething(type) {
    this.showWhat = type;
  }

  public getTextColor(color) {
    return color;
  }

  public switchRadio(color) {
    this.radioColor = color;
  }
}
