import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Avatar from "./Avatar";

class UserStats extends Component {
  render() {
    const { user } = this.props;
    const { name, avatarURL, answers, questions } = user;

    return (
      <Card bg="light">
        <Card.Header>
          <Avatar avatarURL={avatarURL} className="mr-2" />
          {name}
        </Card.Header>
        <Card.Body className="justify-content-center">
          <Card.Text>
            Answered Questions: {Object.keys(answers).length}]
			/
            Created Questions: {questions.length}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Score: {Object.keys(answers).length + questions.length}
        </Card.Footer>
      </Card>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(UserStats);
