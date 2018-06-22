import {
    Component, SimpleChanges, Input
  } from '@angular/core';
  
  @Component({
    selector: 'app-children',
    templateUrl: './app-children.component.html',
    styleUrls: ['./app-children.component.css']
  })
  export class AppChildrenComponent {
    @Input() data: string;
  
    constructor() {
      console.log('constructor执行···');
    }
  
    ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChages执行了···');
    }
  
    ngOnInit() {
      console.log('ogOnInit执行了····');
    }
  
    ngDoCheck() {
      console.log('ngDoCheck执行了····');
    }
  
    ngAfterContentInit() {
      console.log('ngAfterContentInit执行了···');
    }
  
    ngAfterContentChecked() {
      console.log('ngAfterContentChecked执行了···');
    }
  
    ngAfterViewInit() {
      console.log('ngAfterViewInit执行了····');
    }
  
    ngAfterViewChecked() {
      console.log('ngAfterViewChecked执行了····');
    }
  
    ngOnDestroy() {
      console.log('ngOnDestroy执行了····');
    }
  }