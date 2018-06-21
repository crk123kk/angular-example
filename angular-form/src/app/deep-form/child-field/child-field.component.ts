import { Component, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector:"child-field",
    templateUrl:'./child-field.component.html',
    styleUrls:['/child-field.component.css']
})

export class ChildFieldComponent {
    @Input('childForm') childForm:FormGroup;

    constructor(){

    }
    public createFrom() {
        this.childForm = new FormGroup ({
            age: new FormControl('crk1')
        });
    }
}