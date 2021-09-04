import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    errorMsg: "",
  };

  handleSubmit = (e) => {
    const userID = this.userID.value;
    const { dispatch } = this.props;

    e.preventDefault();

    if (userID !== "") {
      dispatch(setAuthedUser(userID));
    } else {
      this.setState({ errorMsg: "You must choose a username" });
    }
  };

  render() {
    const { userNames } = this.props;
    const { errorMsg } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        {errorMsg ? <p className="text-danger">{errorMsg}</p> : null}

        <Form.Control as="select" ref={(id) => (this.userID = id)}>
          <option value="">Select user</option>
          {userNames.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </Form.Control>

        <Button type="submit" variant="outline-dark">
          Login
        </Button>
      </Form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userNames: Object.keys(users).map((id) => ({
      value: id,
      label: users[id].name,
    })),
  };
}

export default connect(mapStateToProps)(Login);
