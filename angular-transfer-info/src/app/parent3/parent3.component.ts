import {Component} from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls:['./parent3.component.css']
})

export class Parent3Component {
    childInfo = '';

    public getChildInfo(info){
        this.childInfo = info;
    }
}