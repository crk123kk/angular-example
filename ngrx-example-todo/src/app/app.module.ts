import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todoList/todo-list.component';
import { TodoListReducerComponent } from './totoListReducer/todo-list.component';
import { todoListReducer } from './reducers/todo.reducer';
import { TodosStatusPipe } from './pipes/todo-status.pipe';
import { AutoFocusDirective } from './directives/autoFocus.directive';
import { CountNumPipePipe } from './pipes/count-num.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListReducerComponent,
    TodosStatusPipe,
    CountNumPipePipe,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ todoListR: todoListReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
