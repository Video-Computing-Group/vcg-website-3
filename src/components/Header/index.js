import { Link } from "gatsby";
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from "styled-components";

import Banner from "./Banner";
import { darkBlue, yellow } from "../../styled/colors";
import "./override.css";
import NavItems from "./NavItems";

class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <header>
        <Banner />
        <Navbar
          expand="md"
          style={{
            backgroundColor: `${darkBlue}`
          }}
        >
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              {NavItems.map(n => (
                <NavItem key={n.path}>
                  <NavItemLink to={n.path} activeStyle={{ color: `${yellow}` }}>
                    {n.name}
                  </NavItemLink>
                </NavItem>
              ))}

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;

const NavItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
`;
