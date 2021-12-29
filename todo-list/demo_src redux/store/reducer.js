import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_ITEM_VALUE,
  INIT_LIST,
} from "./actionType";
const defaultState = {
  inputValue: "",
  list: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.value };
    case ADD_ITEM_VALUE:
      return {
        ...state,
        list: [...state.list, state.inputValue],
        inputValue: "",
      };
    case DELETE_ITEM_VALUE:
      //   const newState = { ...state };
      //   newState.list.splice(action.index);
      //   return newState;
      const newList = [...state.list];
      newList.splice(action.index, 1);
      return { ...state, list: newList };
    case INIT_LIST:
      return { ...state, list: action.value };
    default:
      return state;
  }
};
