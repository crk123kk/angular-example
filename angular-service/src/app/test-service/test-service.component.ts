import { Component, OnInit } from "@angular/core";
import { GetMockService } from "../share/service/getMock.service";

@Component({
    selector:'test-service',
    templateUrl:'./test-service.component.html',
    styleUrls:['./test-service.component.css']
})

export class TestServiceComponent implements OnInit {
    mock : Array<any>;

    constructor(
        private getMockService : GetMockService
    ){}

    ngOnInit(){
        this.getMock();
    }

    getMock() {
        this.getMockService.getMock().subscribe(res =>{
            console.log(res);
            this.mock = res;
        })
    }
}