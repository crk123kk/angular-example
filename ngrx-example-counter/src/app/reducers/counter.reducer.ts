
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, {type, payload}) {
  console.log(state,type,payload);
  switch (type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;
    // 这是一个例子：添加一个新的元素
    case 'ADD_TODO':
      return [ state, payload ];
    default:
      return state;
  }
}