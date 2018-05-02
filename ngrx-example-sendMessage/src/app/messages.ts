//messages reducer

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const messagesReducer = (state = [], {type, payload}) => {
  console.log('ACTION:', type, payload);
  switch(type){
    case ADD_MESSAGE:
      return [...state,payload];
    case DELETE_MESSAGE:
      return state.filter(todo => todo.id !== payload.id);
    default:
      return state;
  }
}