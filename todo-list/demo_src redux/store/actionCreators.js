import axios from "axios";
import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_ITEM_VALUE,
  INIT_LIST,
} from "./actionType";

export const getChangeInput = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value,
});

export const getAddItem = () => ({
  type: ADD_ITEM_VALUE,
});

export const getDeleteItem = (index) => ({
  type: DELETE_ITEM_VALUE,
  index,
});

export const getInitList = (value) => ({
  type: INIT_LIST,
  value,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get("http://localhost:3300/list").then((res) => {
      const data = res.data;
      const action = getInitList(data);
      dispatch(action);
    });
  };
};
