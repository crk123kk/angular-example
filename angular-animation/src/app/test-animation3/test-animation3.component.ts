import { Component } from "@angular/core";
import { slideInDownAnimation } from "../share/animation/slideInDown.animation";

@Component({
    selector:'test-animation3',
    templateUrl:'./test-animation3.component.html',
    styleUrls:['./test-animation3.component.css'],
    animations: [slideInDownAnimation]
})

export class TestAnimation3Component{
    slideState = 'show';

    changeSlideState() {
        this.slideState = this.slideState === 'show' ? 'hidden':'show';
        console.log(this.slideState);
    }
}