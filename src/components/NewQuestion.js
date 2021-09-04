import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    e.preventDefault();

    this.setState({
        optionOne: "",
        optionTwo: "",
      },
      () => dispatch(handleAddQuestion(optionOne, optionTwo))
    );
  };

  render() {
    const { optionOne, optionTwo } = this.state;

    return (
      <>
        <h2 className="text-center">
          <small>Would You Rather...</small>
        </h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="optionOne">
            <Form.Label>Choice One</Form.Label>
            <Form.Control
              type="text"
              name="optionOne"
              value={optionOne}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <h3>OR</h3>

          <Form.Group controlId="optionTwo">
            <Form.Label>Choice Two</Form.Label>
            <Form.Control
              type="text"
              name="optionTwo"
              value={optionTwo}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button type="submit" variant="outline-dark">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default connect()(NewQuestion);
