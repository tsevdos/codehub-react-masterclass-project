import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";

class Footer extends Component {
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
          <footer>
            {user && (
              <div>
                logged in as {user.name} {user.admin && "(admin)"}
              </div>
            )}
            <div>
              Made with ❤️ in Athens, Greece | <a href="https://tsevdos.me">tsevdos.me</a>
            </div>
          </footer>
        </Col>
      </Row>
    );
  }
}

export default Footer;
