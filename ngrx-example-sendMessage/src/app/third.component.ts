import {Component} from '@angular/core'
import * as MessagesActions from './messages';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'third-component',
  template: '<h1>Third Component (Receiver)</h1><div *ngFor="let data of (messagesObservable | async)">{{data}}</div>'
})
export class ThirdComponent {
  messagesObservable: Observable<any>;
  
  constructor(private store:Store<any>) {
    this.messagesObservable = store.select<any>('messages');
    this.messagesObservable.subscribe(data => {
      console.log('Execute some actions');
    });
  }
  
  ngOnDestroy() {
//    this.messagesObservable.unsubscribe(); 
  }
}