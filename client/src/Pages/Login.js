import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";


import Auth from '../utils/auth';

const Login = props => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // update state based on form input changes
  const handleChange = (field, value) => {

    setFormState({
      ...formState,
      [field]: value
    });
  };

  // submit form
  const handleSubmit = async event => {
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

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="sm" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            size="sm"
            placeholder="Your Email"
            value={formState.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </Form.Group>
        <Form.Group size="sm" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            placeholder="Your Password"
            vvalue={formState.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </Form.Group>
        <Button block size="sm" type="submit" variant="outline-primary">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
