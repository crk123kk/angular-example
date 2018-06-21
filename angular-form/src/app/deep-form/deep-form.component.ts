import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector:"deep-form",
    templateUrl:'./deep-form.component.html',
    styleUrls:['/deep-form.component.css']
})

export class DeepFormComponent {
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