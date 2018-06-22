import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector:"child-field",
    templateUrl:'./child-field.component.html',
    styleUrls:['/child-field.component.css']
})

export class ChildFieldComponent implements OnInit{
    @Input('childForm') childFormGroup:FormGroup;

    constructor(){
    }

    ngOnInit() {
        this.createFrom();
    }
    public createFrom() {
        this.childFormGroup.addControl(
            'age', new FormControl('13')
        );
    }
}