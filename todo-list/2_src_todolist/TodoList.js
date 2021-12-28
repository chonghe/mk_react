import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    //4-3 当组件的state或者props发生改变的时候，render函数就会重新执行
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
            // ref={(input) => {
            //   this.input = input;
            // }}
          />
          {/* ref是一个叫做this.input的引用，它指向的是input框对应的dom节点 */}
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
    // 4-7 ref使用,不建议使用ref，因为它是在直接实际操作dom
    // const value = this.input.value;
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
    this.setState(
      (preState) => ({
        // 可接收一个preState,代替this.state
        list: [preState.inputValue, ...preState.list],
        inputValue: "",
      })
      // 4-7 setState是异步，如果想获得setState更新后的数据，需要添加第二个参数，这是一个回调函数
      // ,()=>{console.log(list);}
    );
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
