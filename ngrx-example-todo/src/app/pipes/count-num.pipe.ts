import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'countNumPipe',
  pure: false
})
export class CountNumPipePipe implements PipeTransform {

  transform(value: number, sampleString: string):String {
    return value > 1 ? sampleString+'s' : sampleString;
  }

}