import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector:"deep-form-build",
    templateUrl:'./deep-form-build.component.html',
    styleUrls:['/deep-form-build.component.css']
})

export class DeepFormBuildComponent {
    deepForm = null;

    constructor(){
        this.createForm();
    }

    createForm(){
        this.deepForm = new FormGroup ({
            userName: new FormControl('crk1'),
            nickName: new FormControl('crkkk')
        });
    }

    submitForm(){
        console.log(this.deepForm.value);
    }
}