/*
    1、rxjs的debounceTime
    2、订阅功能————Subject
    3、event的event.preventDefault();————取消默认功能，这里的是指click
            event.stopPropagation();————取消事件的冒泡
            
    参考：https://segmentfault.com/a/1190000010350758
    4、使用方式：
        <button appDebounceClick (debounceClick)="showSomethin()" [debounceTime]="1000">
        防止抖动方式
        </button>
*/

import { Directive, EventEmitter, HostListener, OnInit, Output, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/debounceTime';

@Directive({
    selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
    @Input() debounceTime = 500;
    @Output() debounceClick = new EventEmitter();
    private clicks = new Subject<any>();
    private subscription: Subscription;

    constructor() { }

    ngOnInit() {
        this.subscription = this.clicks
            .debounceTime(this.debounceTime)
            .subscribe(e => this.debounceClick.emit(e));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    @HostListener('click', ['$event'])
    clickEvent(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}