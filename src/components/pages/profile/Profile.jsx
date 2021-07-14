import { React, Component } from "react";
import AuthService from "../../../services/auth/authService";
import { Card, Col, Row, Container } from "react-bootstrap";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }
  render() {
    const { currentUser } = this.state;
    let view;
    if (currentUser) {
      view = (
        <Col sm={6}>
          {currentUser.username}
          {currentUser.firstname}
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
          </ul>
        </Col>
      );
    } else {
      view = <Col sm={6}>" Ou vas tu"</Col>;
    }
    return (
      <Container>
        <Row>{view}</Row>
      </Container>
    );
  }
}
