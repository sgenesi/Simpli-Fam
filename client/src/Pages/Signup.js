import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Auth from '../utils/auth';

import "./Login.css";

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  const [username, setUsername] = useState("");
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
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="Signup">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="sm" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            size="sm"
            placeholder="Your Username"
            value={formState.username}
            onChange={(e) => handleChange("username", e.target.value)}
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
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </Form.Group>
        <Form.Group size="sm" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            placeholder="Your Password"
            value={formState.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </Form.Group>
        <Button block size="sm" type="submit" variant="outline-primary">
          Signup
      </Button>
      </Form>
    </div>
  );
}

export default Signup;
