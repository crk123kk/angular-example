

export const AddTodo = 'AddTodo';
export const DeleteTodo = 'DeleteTodo';
export const EditTodoStatus = 'EditTodoStatus';
export const editTodoText = 'editTodoText';
export const editTodoEditing = 'editTodoEditing';
export const toggleAllTodo = 'toggleAllTodo';
export const clearAllComplate = 'clearAllComplate';
export const ifAllChecked = 'ifAllChecked';
export const cancleEdit = 'cancleEdit';

export function todoListReducer(state = [],{type,payload}) {
    // console.log(state,type,payload)
    let editTodo = state[state.indexOf(payload)];
    switch(type){
        case AddTodo:
            return ifSame([...state],payload) ? [...state] : [...state,{text:payload,done:false,editing:false,editText:payload}];

        case DeleteTodo:
            return state.filter(todo => todo.text !== payload.text);
        
        case EditTodoStatus:
            editTodo.done = !payload.done;
            return state;

        case editTodoEditing:
            [...state].forEach(todo =>{
                todo.editing = false;
            })
            editTodo.editing = true;
            return state;

        case editTodoText:
            if(!ifSame([...state],editTodo.editText)){
                editTodo.text = editTodo.editText;
            }
            [...state].forEach(todo =>{
                todo.editing = false;
            })
            return state;
        
        case toggleAllTodo:
            state.forEach(todo => {
                todo.done = payload;
            })
            return state;

        case clearAllComplate:
            return state.filter(todo => !todo.done);

        case cancleEdit:
            [...state].forEach(todo =>{
                todo.editing = false;
            });
            return state;
    }
}

function ifSame(todoList,todoText) {
    return todoList.some(testTodo => {
        return testTodo.text === todoText;
    })
}