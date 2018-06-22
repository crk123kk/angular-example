import { Component } from "@angular/core";

@Component({
    selector:'life-cycle',
    templateUrl:'./life-cycle.component.html',
    styleUrls:['./life-cycle.component.css']
})

export class LifeCycleComponent{
    testName = 'kk';
    ifShow: boolean = true;
    createOrCreate() {
        this.ifShow = !this.ifShow;
    }
}