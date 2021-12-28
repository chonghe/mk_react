import React, { Component } from "react";
import "antd/dist/antd.css";

import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList,
} from "./store/actionCreator";
import TodoListUI from "./TodoListUI";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    //console.log(store.getState());
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleBtnClick={this.handleBtnClick}
        handleInputChange={this.handleInputChange}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
    //console.log(e.target.value);
  };
  handleStoreChange = () => {
    this.setState(store.getState());
  };
  handleBtnClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  };
  handleItemDelete = (index) => {
    //console.log(index);
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  };
}
