import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'todosStatusPipe',
  pure: false
})
export class TodosStatusPipe implements PipeTransform {

  transform(value: Array<any>, filterString: string, status: string): Array<any> {
    let filterTodoList = [];
    if(value != undefined){
        switch(status){
            case 'all':
                filterTodoList = value;
                break;
            case 'active':
                filterTodoList = value.filter(todo => !todo[filterString]);
                break;
            case 'completed':
                filterTodoList = value.filter(todo => todo[filterString]);
                break;
        }
    }
    return filterTodoList;
  }

}