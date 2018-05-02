import { Component } from "@angular/core";

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls:[
        '../../../node_modules/todomvc-app-css/index.css',
        './todo-list.component.css'
    ]
})

export class TodoListComponent{
    todoList:Array<any>;
    filters:Array<any>;
    filterTodoList:Array<any>;
    remainTodoList:Array<any>;
    fillTodo:string;
    allChecked:boolean;
    selectFilter:string;

    constructor(){
        this.todoList = [],
        this.filters = ['all','active','completed'],
        this.filterTodoList=[],
        this.remainTodoList=[],
        this.fillTodo = '',
        this.allChecked = false,
        this.selectFilter = 'all'
    }

    private addTodo(value){
        if(value){
            this.todoList.push({text:value,done:false,editing:false,editText:value});
            this.filterTodoList = Object.assign(this.todoList);
            this.fillTodo = '';
            this.countRemainTodos();
        }
    }

    private changeTodoStatus(value){
        value.done = !value.done;
        this.countRemainTodos();
        this.choseFilter(this.selectFilter);
        this.ifCheckAll();
    }

    private changeAllTodo(value){
        this.todoList.forEach(todo =>{
            todo.done = !value;
        })
        this.allChecked = !this.allChecked;
        this.countRemainTodos();
        this.choseFilter(this.selectFilter);
    }

    private choseFilter(value) {
        this.selectFilter = value;
        switch(value){
            case 'all':
                this.filterTodoList = Object.assign(this.todoList);
                break;
            case 'active':
                this.filterTodoList = this.todoList.filter(todo => !todo.done);
                break;
            case 'completed':
                this.filterTodoList = this.todoList.filter(todo => todo.done);
                break;
        }
    }

    private countRemainTodos(){
        this.remainTodoList = this.todoList.filter(todo => !todo.done);
    }

    private clickCompleted(){
        this.todoList = this.todoList.filter(todo => !todo.done);
        this.filterTodoList = this.todoList.filter(todo => !todo.done);
        this.choseFilter(this.selectFilter);
    }

    private deleteTodo(value){
        this.todoList.splice(this.todoList.indexOf(value), 1);
        this.filterTodoList = Object.assign(this.todoList);
        this.countRemainTodos();
    }

    private ifCheckAll(){
        this.allChecked = this.todoList.every(todo => todo.done);
    }

    private changeTodoContent(value) {
        this.filterTodoList[this.todoList.indexOf(value)].text = value.editText;
        this.filterTodoList.forEach(value => value.editing = false);
    }

    private noChangeTodoContent(value){
        this.filterTodoList[this.todoList.indexOf(value)].editText = value.text;
        this.filterTodoList[this.todoList.indexOf(value)].editing = false;
    }

    private changeTodoEditing(value) {
        this.filterTodoList.forEach(value => value.editing = false);
        this.filterTodoList[this.todoList.indexOf(value)].editing = true;
    }
}