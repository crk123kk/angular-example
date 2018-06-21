import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validateCrk][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CrkValidatorDirective),
      multi: true
    }
  ]
})
export class CrkValidatorDirective implements Validator {
  constructor(
    @Attribute('validateCrk') public validateCrk: string) {
  }
  validate(c: AbstractControl): { [key: string]: any } {
    // 控件自身值
    const self = c.value;
    // 控件的值是否等于'crk'
    if (self !== 'crk') {
      return {
        validateCrk: true
      };
    }
    return null;
  }
}