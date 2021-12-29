import React, { Component } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";

import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList,
} from "./store/actionCreator";
import { Input, Button, List } from "antd";

class TodoList extends Component {
  /* constructor(props) {
    super(props);
    this.state = store.getState();
    //console.log(store.getState());
    //store.subscribe(this.handleStoreChange);
  } */

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }
  render() {
    return (
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <div>
          <Input
            placeholder="input item"
            style={{ width: "300px", marginRight: "10px" }}
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          ></Input>
          <Button type="primary" onClick={this.props.handleBtnClick}>
            Submit
          </Button>
        </div>
        <List
          style={{ width: "300px", marginTop: "10px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.props.handleItemDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
  // handleStoreChange = () => {
  //   this.setState(store.getState());
  // };
}
// 接收store中的state，然后return一个对象.
// store中的state映射到组件中的props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};
// store.dispatch映射到props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
      //console.log(e.target.value);
    },

    handleBtnClick() {
      const action = getAddItemAction();
      dispatch(action);
    },
    handleItemDelete(index) {
      // console.log(index);
      const action = getDeleteItemAction(index);
      dispatch(action);
    },
  };
};
// 让组件和store做连接，规则
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
