import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childen2',
  templateUrl: './child2.component.html',
  styleUrls: ['/child2.component.css']
})
export class Childen2Component {
  @Output() event = new EventEmitter();
  private name: string;
  upward() {
    //实例化EventEmitter，赋值给event，event被@Output装饰器定义为输出属性，这样event具备了向上级传递数据的能力，通过调用EventEmitter类中定义的emit方法，来向上传递数据
    this.event.emit(this.name);
  }
}