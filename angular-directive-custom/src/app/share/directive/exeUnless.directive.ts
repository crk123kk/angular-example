/*
    指令功能描述：该指令实现 ngIf 指令相反的效果，当指令的输入条件为 Falsy 值时，显示DOM元素。
    ex:
        <h1 *exeUnless="condition">Hello {{name}}</h1>
*/
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[exeUnless]'
})
export class UnlessDirective {

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) {
    }

    @Input('exeUnless')
    set condition(newCondition: boolean) {
        if (!newCondition) { // 创建模板对应的内嵌视图
        this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
        this.viewContainer.clear();
        }
    }
}