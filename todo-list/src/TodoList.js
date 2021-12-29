import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getChangeInput,
  getAddItem,
  getDeleteItem,
  getTodoList,
} from "./store/actionCreators";

const TodoListUI = (props) => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleBtnClick,
    handleDeleteItem,
  } = props;
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="input search"
          style={{ width: "300px", marginRight: "10px" }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleBtnClick}>Submit</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <div key={index} onClick={() => handleDeleteItem(index)}>
            {item}
          </div>
        ))}
      </ul>
    </div>
  );
};
class TodoList extends Component {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    const {
      inputValue,
      list,
      handleInputChange,
      handleBtnClick,
      handleDeleteItem,
    } = this.props;
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        handleInputChange={handleInputChange}
        handleBtnClick={handleBtnClick}
        handleDeleteItem={handleDeleteItem}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const { value } = e.target;
      const action = getChangeInput(value);
      dispatch(action);
    },
    handleBtnClick() {
      const action = getAddItem();
      dispatch(action);
    },
    handleDeleteItem(index) {
      const action = getDeleteItem(index);
      dispatch(action);
    },
    getList() {
      const action = getTodoList();
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
