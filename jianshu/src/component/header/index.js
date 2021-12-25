import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
} from "./style";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">Home</NavItem>
            <NavItem className="left">Download</NavItem>
            <NavItem className="right">Login</NavItem>
            <NavItem className="right">Aa</NavItem>
            <NavSearch
              className={this.state.focused ? "focused" : ""}
            ></NavSearch>
          </Nav>
          <Addition>
            <Button>Register</Button>
            <Button>Writing</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    );
  }
}
