/*
    exponential-strength.pipe.ts
    步骤 ：
        1、导入Pipe，PipeTransform
        2、通过注解定义名字，定义是纯管道还是非纯管道，默认是纯管道
        3、定义管道并继承PipeTransform
        4、实现继承的方法transform
*/
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}