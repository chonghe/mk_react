import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "./store/actionType";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    //console.log(store.getState());
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <div>
          <Input
            placeholder="input item"
            style={{ width: "300px", marginRight: "10px" }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          ></Input>
          <Button type="primary" onClick={this.handleBtnClick}>
            Submit
          </Button>
        </div>
        <List
          style={{ width: "300px", marginTop: "10px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.handleItemDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
  handleInputChange = (e) => {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value,
    };
    store.dispatch(action);
    //console.log(e.target.value);
  };
  handleStoreChange = () => {
    this.setState(store.getState());
  };
  handleBtnClick = () => {
    const action = {
      type: ADD_TODO_ITEM,
      item: this.state.inputValue,
    };
    store.dispatch(action);
  };
  handleItemDelete = (index) => {
    console.log(index);
    const action = {
      type: DELETE_TODO_ITEM,
      index,
    };
    store.dispatch(action);
  };
}
