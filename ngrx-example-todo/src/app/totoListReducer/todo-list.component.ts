import { Component } from "@angular/core";
import { 
    AddTodo, 
    DeleteTodo, 
    EditTodoStatus, 
    editTodoEditing, 
    editTodoText, 
    toggleAllTodo, 
    clearAllComplate, 
    cancleEdit } from '../reducers/todo.reducer';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
    selector: 'todo-list-reducer',
    templateUrl: './todo-list.component.html',
    styleUrls:[
        '../../../node_modules/todomvc-app-css/index.css',
        './todo-list.component.css'
    ]
})

export class TodoListReducerComponent{
    todoList: Observable<any>;
    fillTodo: string;
    filters: Array<string>;
    selectFilter: string;

    constructor(
        private store:Store<any>
    ){
        this.todoList = store.select('todoListR');
        this.filters = ['all','active','completed'];
        this.selectFilter = 'all';
    }

    private addTodo(value) {
        if(value !== ''){
            this.store.dispatch({
                type: AddTodo,
                payload: value.trim()
            });
            this.fillTodo = '';
        }
    }

    private deleteTodo(value) {
        this.store.dispatch({
            type: DeleteTodo,
            payload: value
        });
    }

    private editTodoStatus(value) {
        this.store.dispatch({
            type: EditTodoStatus,
            payload: value
        });
    }

    private editTodoEditing(value) {
        this.store.dispatch({
            type: editTodoEditing,
            payload: value
        });
    }

    private editTodoText(value) {
        this.store.dispatch({
            type: editTodoText,
            payload: value
        });
    }

    private choseFilter(value) {
        this.selectFilter = value;
    }

    private clearComplateList() {
        this.store.dispatch({
            type: clearAllComplate,
            payload: ''
        });
    }

    private toggleAllTodo(value) {
        this.store.dispatch({
            type: toggleAllTodo,
            payload: value.checked
        });
    }

    private cancleEdit() {
        this.store.dispatch({
            type: cancleEdit,
            payload: ''
        });
    }

}