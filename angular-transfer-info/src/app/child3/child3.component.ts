import { Component} from '@angular/core';

@Component({
  selector: 'app-childen3',
  templateUrl: './child3.component.html',
})
export class Childen3Component {
    childInfo = 'childInfo';

    fun1() {
    alert('子组件方法');
    }

}