import { Component } from "@angular/core";
import { FormControl ,FormGroup, Validators, ValidatorFn} from '@angular/forms';

@Component({
    selector:"reactive-form",
    templateUrl:'./reactive-form.component.html',
    styleUrls:['/reactive-form.component.css']
})

export class ReactiveFormComponent {

    reactiveForm = null;
    

    constructor(){
        this.createForm();
    }

    createForm(){
        this.reactiveForm = new FormGroup ({
            userName: new FormControl('crk1',Validators.required),
            nickName: new FormControl('crkkk',[Validators.required,Validators.minLength(1)]),
            age: new FormControl('12',Validators.required),
            password: new FormControl('123',Validators.required),
            againPwd: new FormControl(''),
            sex: new FormControl('feman'),
            chinese: new FormControl(false),
            english: new FormControl(false),
            weather: new FormControl('wind'),
            tool: new FormControl(['pen','car']),
        },[this.validateEqual('password','againPwd'),this.validateEqualCrk('nickName','gg')]);
    }

    submitForm(){
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