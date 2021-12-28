import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "./actionType";

const defaultState = {
  inputValue: "",
  list: [],
};

// reducer必须是一个函数,并且接收两个参数
export default (state = defaultState, action) => {
  //reducer会自动接收到action和state，通过store的转发
  //console.log(state, action);
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.value };
    case ADD_TODO_ITEM:
      return { ...state, list: [action.item, ...state.list], inputValue: "" };
    case DELETE_TODO_ITEM:
      const newState = { ...state };
      newState.list.splice(action.index, 1);
      return newState;
    //{ ...state, list: state.list.splice(action.index, 1) };
    default:
      return state;
  }
};
