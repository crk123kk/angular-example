import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROS} from "./hero.data";

@Injectable()
export class HeroService {
  getHeros(): Promise<Hero[]> {
    //获取数据的服务往往都是异步的,所以我们使用了Promise去封装我们获取到的数据,来模拟异步请求,还要注意，既然用异步的方式，那么User[]也应该是Promise类型的
    return Promise.resolve(HEROS);
  }
    //我们还可以更真实的的去模拟从服务器读取数据的操作;我们可以通过使用setTimeout来延时获取我们的数据,这就很好地模拟了我们从服务器获取数据的操作;
    getMockHeros(): Promise<Hero[]> {
        return new Promise(resolve => setTimeout(resolve(HEROS), 2000))
            .then(() => this.getHeros());
    }
}