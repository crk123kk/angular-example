import { Component } from "@angular/core";
import { INCREMENT, DECREMENT, RESET } from '../reducers/counter.reducer';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
    selector:'counter',
    templateUrl:'./counter.component.html'
})

export class CounterComponent{
    counter1:Observable<number>;

    constructor(
        private store: Store<any>
    ){
        this.counter1 = store.select('counter2');
    }

    private increment(){
        console.log('increment');
        this.store.dispatch({ type: INCREMENT,payload:{crk:'crk',why:'why'} });
    }

    private decrement(){
        console.log('decrement');
        this.store.dispatch({ type: DECREMENT });
    }

    private resetNum(){
        console.log('resetNum');
        this.store.dispatch({ type: RESET });
    }
}

