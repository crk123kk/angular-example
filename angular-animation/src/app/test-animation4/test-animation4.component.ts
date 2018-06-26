import { Component } from "@angular/core";
import { listAnimation } from "../share/animation/listAnimation.animations";

@Component({
    selector:'test-animation4',
    templateUrl:'./test-animation4.component.html',
    styleUrls:['./test-animation4.component.css'],
    animations:[listAnimation]
})

export class TestAnimation4Component {
    mockData1:Array<any> = [
        {label:'模块一',goal:'person-info'},
        {label:'模块二',goal:'person-company'},
        {label:'模块三',goal:'person-work'},
        {label:'模块四',goal:'person-skill'},
        {label:'模块五',goal:'person-say'}];

    mockData = [];

    changeListAnimation() {
        this.mockData = this.mockData.length > 0 ? [] : this.mockData1;
    }
}