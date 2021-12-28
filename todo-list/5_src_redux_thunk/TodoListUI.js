import React, { Component } from "react";
import { Input, Button, List } from "antd";

/* export default class TodoListUI extends Component {
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
} */

export default (props) => {
  return (
    <div style={{ marginLeft: "10px", marginTop: "10px" }}>
      <div>
        <Input
          placeholder="input item"
          style={{ width: "300px", marginRight: "10px" }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={props.handleBtnClick}>
          Submit
        </Button>
      </div>
      <List
        style={{ width: "300px", marginTop: "10px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleItemDelete(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};
// export default TodoListUI;
