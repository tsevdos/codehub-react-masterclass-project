import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Employees />
        <Footer />
      </Container>
    );
  }
}

export default Dashboard;
