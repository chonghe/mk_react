import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  render() {
    const { item } = this.props;
    return <div onClick={() => this.handleClick()}>{item}</div>;
  }
  handleClick = () => {
    const { index, handleItemDelete } = this.props;
    handleItemDelete(index);
  };
}

TodoItem.propTypes = {
  content: PropTypes.string,
  handleClick: PropTypes.func,
  index: PropTypes.number,
};
