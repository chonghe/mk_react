import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { item, index, handleDeleteItem } = this.props;
    return <div onClick={() => this.handleClick()}>{item}</div>;
    // 直接使用父类方法
    // return <div onClick={() => handleDeleteItem(index)}>{item}</div>;
  }
  handleClick = () => {
    const { item, index, handleDeleteItem } = this.props;
    handleDeleteItem(index);
  };
}
