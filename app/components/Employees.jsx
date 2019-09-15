import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";

class Employees extends Component {
  state = {
    employees: [],
    selectedEmployee: null,
  };

  async componentDidMount() {
    const employees = await axios.get("http://localhost:3001/employees");

    this.setState({ employees: employees.data });
  }

  onSelectEmployee = (e, id) => {
    e.preventDefault();
    const selectedEmployee = this.state.employees.find((employee) => employee.id === id);

    this.setState({ selectedEmployee });
  };

  onInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({ selectedEmployee: { ...this.state.selectedEmployee, [name]: value } });
  };

  onSelectChange = (e) => {
    const { value } = e.target;

    this.setState({ selectedEmployee: { ...this.state.selectedEmployee, gender: value } });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    const { id, ...rest } = this.state.selectedEmployee;
    await axios.put(`http://localhost:3001/employees/${id}`, rest);
    const employees = await axios.get("http://localhost:3001/employees");

    this.setState({ employees: employees.data });
  };

  render() {
    const { employees, selectedEmployee } = this.state;

    return (
      <Row>
        <Col xs={12}>
          <div className="employees-container">
            <div className="employees-list">
              <ul>
                {employees.length &&
                  employees.map((employee) => (
                    <li key={employee.id} className="employee-list-item">
                      <a href="#" onClick={(e) => this.onSelectEmployee(e, employee.id)}>
                        <div className="img">
                          <img
                            width={70}
                            height={70}
                            className="rounded-circle"
                            src={employee.picture}
                            alt={`${employee.firstName} ${employee.lastName} photo`}
                          />
                        </div>
                        <div className="info">
                          <p className="name">{`${employee.firstName} ${employee.lastName}`}</p>
                          <p className="email">{employee.email}</p>
                        </div>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="employee-details">
              {selectedEmployee ? (
                <>
                  <h3>
                    {selectedEmployee.id}:{" "}
                    {`${selectedEmployee.firstName} ${selectedEmployee.lastName}`} (
                    {selectedEmployee.department})
                  </h3>
                  <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName">First name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={selectedEmployee.firstName}
                        onChange={this.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={selectedEmployee.lastName}
                        onChange={this.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender">Gender:</label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        onChange={this.onSelectChange}
                      >
                        <option>male</option>
                        <option>female</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={selectedEmployee.email}
                        onChange={this.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={selectedEmployee.phone}
                        onChange={this.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mobile">Mobile:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={selectedEmployee.mobile}
                        onChange={this.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="age">Age:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="age"
                        name="age"
                        value={selectedEmployee.age}
                        onChange={this.onInputChange}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary float-sm-right">
                      Submit
                    </button>
                  </form>
                </>
              ) : (
                <h3>Please select a user to view edit his data...</h3>
              )}
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Employees;
