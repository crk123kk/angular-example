import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RepeatValidatorDirective),
      multi: true
    }
  ]
})
export class RepeatValidatorDirective implements Validator {
  constructor(
    @Attribute('validateEqual') public validateEqual: string,
    @Attribute('reverse') public reverse: string) {
  }

  private get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true';
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const self = c.value;

    const target = c.root.get(this.validateEqual);

    // 不反向查询且值不相等
    if (target && self !== target.value && !this.isReverse) {
      return {
        validateEqual: true
      };
    }

    // 反向查询且值相等
    if (target && self === target.value && this.isReverse) {
      delete target.errors['validateEqual'];
      if (!Object.keys(target.errors).length) {
        target.setErrors(null);
      }
    }

    // 反向查询且值不相等
    if (target && self !== target.value && this.isReverse) {
      target.setErrors({
        validateEqual: true
      });
    }

    return null;
  }
}