import { Component } from "@angular/core";

@Component({
    selector:"template-form",
    templateUrl:'./template-form.component.html',
    styleUrls:['/template-form.component.css']
})

export class TemplateFormComponent {
    userName1='name';
    nickName = 'crk';
    age='12';
    password='123';
    againPwd='1';
    sex = 'man';
    noun = {
        chinese:true,
        english:true,
        math:true,
        run:true,
        walk:true,
    };
    weather = 'cloudy';
    tool = ['computer'];

    submitForm(){
        console.log(this.userName1);
        console.log(this.age);
        console.log(this.password);
        console.log(this.againPwd);
        console.log(this.sex);
        console.log(this.noun);
        console.log(this.weather);
        console.log(this.tool);
    }
}