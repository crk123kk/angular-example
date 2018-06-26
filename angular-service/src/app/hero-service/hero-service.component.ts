import { Component, OnInit } from "@angular/core";
import { Hero } from "../share/service/Hero";
import { HeroService } from "../share/service/hero.data.service";

@Component({
    selector:'hero-service',
    templateUrl:'./hero-service.component.html',
    styleUrls:['./hero-service.component.css']
})

export class HeroServiceComponent implements OnInit {
    heros: Hero[];

    constructor(
      private heroService: HeroService
    ){}

    ngOnInit() {
        this.getHeroInfo();
    }

    public getHeroInfo () {
        //noinspection TypeScriptUnresolvedFunction
        //构造函数是为了简单的初始化工作而设计的,比如把构造函数的参数赋值给属性.它的负担不应该过于沉重.所以我们把数据的获取放在了组件的生命周期的钩子函数中去,
        this.heroService.getHeros().then(heros => {
            console.log(heros);
            this.heros = heros
        })
    }
}