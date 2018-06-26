import { Component } from "@angular/core";
import { flyInOut } from "../share/animation/flyInOut.animations";

@Component({
    selector:'test-animation2',
    templateUrl:'./test-animation2.component.html',
    styleUrls:['./test-animation2.component.css'],
    animations:[flyInOut]
})

export class TestAnimation2Component {
    flyState = 'in';

    changeState() {
        if(this.flyState === 'in'){
            this.flyState = 'out'
        }else {
            this.flyState = 'in'
        }
    }
}