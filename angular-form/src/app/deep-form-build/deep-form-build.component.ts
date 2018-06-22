import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
    selector:"deep-form-build",
    templateUrl:'./deep-form-build.component.html',
    styleUrls:['/deep-form-build.component.css']
})

export class DeepFormBuildComponent implements OnInit{
    deepForm = null;

    constructor(
        private fb: FormBuilder
    ){}

    ngOnInit() {
        this.createForm();
    }

    createForm(){
        this.deepForm = this.fb.group({
            userName: 'crk2',
            nickName: ['crkkk'],
        });
    }

    submitForm(){
        console.log(this.deepForm.value);
    }
}