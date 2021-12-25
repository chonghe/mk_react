import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
  }
  render() {
    const { inputValue } = this.state;
    return (
      <Fragment>
        <h1>TodoList</h1>
        <div>
          <label htmlFor="search">content:</label>
          <input
            className="input"
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
            id="search"
          />
          <button onClick={this.handleBtnClick}>Search</button>
        </div>
        <ul>{this.getTodoList()}</ul>
      </Fragment>
    );
  }
  getTodoList = () => {
    const { list } = this.state;
    return list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          handleItemDelete={this.handleItemDelete}
        />
      );
    });
  };
  handleInputChange = (e) => {
    // 防止报错在setState的函数写法
    const value = e.target.value;
    // 省去return写法
    this.setState(() => ({
      inputValue: value,
    }));
    // this.setState(() => {
    //   return { inputValue: value };
    // });
  };

  handleBtnClick = () => {
    // const newList = [this.state.inputValue, ...this.state.list];
    this.setState((preState) => ({
      // 可接收一个preState,代替this.state
      list: [preState.inputValue, ...preState.list],
      inputValue: "",
    }));
  };
  handleItemDelete = (index) => {
    this.setState((preState) => {
      const list = [...preState.list];
      list.splice(index, 1);
      return {
        list,
      };
    });
  };
}
