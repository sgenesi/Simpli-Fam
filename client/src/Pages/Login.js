import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import { ADD_USER } from '../utils/mutations';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Login.css";


import Auth from '../utils/auth';

const Login = props => {
  const [formState, setFormState] = useState({ email: '', password: '', newEmail: '', newPassword: '' });
  const [login] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  // update state based on form input changes
  const handleLogChange = (field, value) => {

    setFormState({
      ...formState,
      [field]: value
    });
  };

  const handleSignChange = (field, value) => {

    setFormState({
      ...formState,
      [field]: value
    });
  };

  // submit form
  const handleLogSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: ''
    });
  };

  const handleSignSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="Login">
            <h2>Login</h2>
            <Form onSubmit={handleLogSubmit}>
              <Form.Group size="sm" controlId="newEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  size="sm"
                  placeholder="Your Email"
                  value={formState.newEmail}
                  onChange={(e) => handleLogChange("newEmail", e.target.value)}
                />
              </Form.Group>
              <Form.Group size="sm" controlId="newPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  size="sm"
                  placeholder="Your Password"
                  vvalue={formState.newPassword}
                  onChange={(e) => handleLogChange("newPassword", e.target.value)}
                />
              </Form.Group>
              <Button outline size="sm" type="submit" variant="outline-primary">
                Submit
        </Button>
            </Form>
          </div>
        </Col>

        <Col>
          <div className="Signup">
            <h2>Sign Up</h2>
            <Form onSubmit={handleSignSubmit}>
              <Form.Group size="sm" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  autoFocus
                  type="username"
                  size="sm"
                  placeholder="Your Username"
                  value={formState.username}
                  onChange={(e) => handleSignChange("username", e.target.value)}
                />
              </Form.Group>
              <Form.Group size="sm" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  size="sm"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) => handleSignChange("email", e.target.value)}
                />
              </Form.Group>
              <Form.Group size="sm" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  size="sm"
                  placeholder="Your Password"
                  value={formState.password}
                  onChange={(e) => handleSignChange("password", e.target.value)}
                />
              </Form.Group>
              <Button outline size="sm" type="submit" variant="outline-primary">
                Submit
     </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
