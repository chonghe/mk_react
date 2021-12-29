import React, { Component } from "react";
import TodoItem from "./TodoItem";
import store from "./store";

import {
  getChangeInput,
  getAddItem,
  getDeleteItem,
  getTodoList,
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }
  componentDidMount() {
    // axios.get("http://localhost:3300/list").then((res) => {
    //   const data = res.data;
    //   const action = getInitList(data);
    //   store.dispatch(action);
    // });
    const action = getTodoList();
    store.dispatch(action);
  }
  render() {
    const { inputValue, list } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="input search"
            style={{ width: "300px", marginRight: "10px" }}
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>Submit</button>
        </div>
        <ul>
          {list.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              index={index}
              handleDeleteItem={this.handleDeleteItem}
            />
          ))}
        </ul>
      </div>
    );
  }
  handleInputChange = (e) => {
    const { value } = e.target;
    // this.setState({
    //   inputValue: value,
    // });
    const action = getChangeInput(value);
    // {
    //   type: CHANGE_INPUT_VALUE,
    //   value: value,
    // };
    store.dispatch(action);
  };
  handleBtnClick = () => {
    // const { inputValue, list } = this.state;
    // this.setState({
    //   list: [...list, inputValue],
    //   inputValue: "",
    // });
    const action = getAddItem();
    // {
    //   type: ADD_ITEM_VALUE,
    // };
    store.dispatch(action);
  };
  handleDeleteItem = (index) => {
    // const list = [...this.state.list];
    // list.splice(index, 1); // 这只是删除某一项，不要接收，否则只会显示要删除的元素。
    // this.setState({
    //   list: list,
    // });
    const action = getDeleteItem(index);
    // {
    //   type: DELETE_ITEM_VALUE,
    //   index,
    // };
    store.dispatch(action);
  };
}

export default TodoList;
