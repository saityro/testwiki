import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
      <div className="NavBar">
      <NavBar />
      </div>
    );
  }
}
export default Header;