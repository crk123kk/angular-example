import { Component } from "@angular/core";
import { FormControl ,FormGroup, Validators, FormBuilder, ValidatorFn} from '@angular/forms';

@Component({
    selector:"reactive-formBuild",
    templateUrl:'./reactive-formBuild.component.html',
    styleUrls:['/reactive-formBuild.component.css']
})

export class ReactiveFormBuildComponent {

    reactiveForm = null;
    

    constructor(
        private fb: FormBuilder
    ){
        this.createForm();
    }

    createForm(){
        this.reactiveForm = this.fb.group({
            userName: 'crk2',
            nickName: ['',[Validators.required,Validators.minLength(3)]],
            age: ['12',[]],
            password: ['123',[]],
            againPwd: [,[]],
            sex: ['feman',[]],
            chinese: [false,[]],
            english: [true,[]],
            weather: ['wind',[]],
            tool: [['computer','car'],[]],
        },{validator: [this.validateEqual('password', 'againPwd'),this.validateEqualCrk('nickName','gg')]});
    }

    submitForm(){
        console.log(this.reactiveForm);
        console.log(this.reactiveForm.value);
    }

     /**
        响应式表单自定义指令
    */
    validateEqual(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
        return (group: FormGroup): {[key: string]: any} => {
        const password = group.controls[passwordKey];
        const confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
            validateEqual: true
            };
        }
        return null;
        };
    }
    /**
        响应式表单自定义指令
    */
   validateEqualCrk(confirmKey: string, confirmStr?:string): ValidatorFn {
        return (group: FormGroup): {[key: string]: any} => {
        const confirmField = group.controls[confirmKey];
        const pattenStr = confirmStr ? confirmStr : 'crk'
        if (confirmField.value !== pattenStr) {
            return {
                validateEqualCrk: true
            };
        }
            return null;
        };
    }
}