import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
    selector:"child-field-build",
    templateUrl:'./child-field-build.component.html',
    styleUrls:['/child-field-build.component.css']
})

export class ChildFieldBuildComponent implements OnInit{
    @Input() childForm:FormGroup;

    constructor(
        private fb: FormBuilder
    ){
        // this.addFromField();
    }

    ngOnInit() {
        this.addFromField();
    }
    public addFromField() {
        this.childForm.addControl(
            'age' , this.fb.control('12')
        )
    }
}