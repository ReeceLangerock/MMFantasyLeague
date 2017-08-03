import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <header>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>
                Mansion Men
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav onSelect={this.handleSelect}>
              <LinkContainer to="/trophy-room">
                <NavItem eventKey={1}>Trophy Room</NavItem>
              </LinkContainer>
              <LinkContainer to="/rules">
                <NavItem eventKey={2} href="#">Rules</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Stats" id="basic-nav-dropdown">
                <LinkContainer to="/stats/league">
                  <MenuItem eventKey={3.1}>League</MenuItem>
                </LinkContainer>
                <LinkContainer to="/stats/user">
                  <MenuItem eventKey={3.2}>User</MenuItem>
                </LinkContainer>
                <LinkContainer to="/stats/head-to-head">
                  <MenuItem eventKey={3.3}>Head to Head</MenuItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/draftboard">
              <NavItem eventKey={1} >Draftboard</NavItem>
            </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Navigation;
