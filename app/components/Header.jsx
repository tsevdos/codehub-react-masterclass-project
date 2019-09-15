import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Navbar, NavbarBrand, Nav, Media } from "reactstrap";

class Header extends Component {
  state = {
    user: null,
  };

  async componentDidMount() {
    const user = await axios.get("http://localhost:3001/user");

    this.setState({ user: user.data });
  }

  render() {
    const { user } = this.state;

    return (
      <Row>
        <Col xs={12}>
          <Navbar color="light" light>
            <NavbarBrand href="#">Code.Hub Dashboard</NavbarBrand>
            <Nav className="ml-auto" navbar>
              {user && (
                <Media>
                  <Media left>
                    <img
                      className="rounded-circle"
                      width="50"
                      height="50"
                      src={user.imgPath}
                      alt={user.name}
                    />
                  </Media>
                  <Media body className="user-text">
                    {user.username}
                  </Media>
                </Media>
              )}
            </Nav>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default Header;
