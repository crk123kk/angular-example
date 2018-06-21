/*
    sexReform.pipe.ts
*/
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sexReform',
  //非纯管道
  //重点在于实现PipeTransform接口的transform方法，定义为非纯管道仅用于演示，非纯管道对性能影响较大，尽量避免。
  pure:false
})
export class SexReformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let chineseSex;
    switch (value) {
      case 'male':
        chineseSex = '男';
        break;
      case 'female':
        chineseSex = '女';
        break;
      default:
        chineseSex = '未知性别';
        break;
    }
    return chineseSex;
  }

}