import { Component, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector:"child-field-build",
    templateUrl:'./child-field-build.component.html',
    styleUrls:['/child-field-build.component.css']
})

export class ChildFieldBuildComponent {
    @Input('childForm') childForm:FormGroup;

    constructor(){

    }
    public createFrom() {
        this.childForm = new FormGroup ({
            age: new FormControl('crk1')
        });
    }
}