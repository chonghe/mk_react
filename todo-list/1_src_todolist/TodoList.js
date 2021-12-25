import React, { Component, Fragment } from "react";
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
    const { inputValue, list } = this.state;
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
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index} onClick={() => this.handleItemDelete(index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  handleBtnClick = () => {
    const newList = [this.state.inputValue, ...this.state.list];
    this.setState({
      list: newList,
      inputValue: "",
    });
  };
  handleItemDelete = (index) => {
    //console.log(index);
    const newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  };
}
