import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";


import Auth from '../utils/auth';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
git 
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
try 
  

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

// const Login = () => {
// return (
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6">
//       <form>
//         <p className="h4 text-center mb-4">Sign in</p>
//         <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
//           Your email
//         </label>
//         <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
//         <br />
//         <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
//           Your password
//         </label>
//         <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
//         <div className="text-center mt-4">
//           <MDBBtn color="indigo" type="submit">Login</MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// );
// };

// export default Login;

// export default Login;

// import Auth from '../utils/auth';

// const Login = props => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   // const [login, { error }] = useMutation(LOGIN_USER);

//   // update state based on form input changes
//   const handleChange = event => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   // submit form
//   const handleFormSubmit = async event => {
//     // event.preventDefault();

//     // try {
//     //   const { data } = await login({
//     //     variables: { ...formState }
//     //   });

//     //   Auth.login(data.login.token);
//     // } catch (e) {
//     //   console.error(e);
//     // }

//     // clear form values
//     setFormState({
//       email: '',
//       password: ''
//     });
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-md-6">
//         <div className="card">
//           <h4 className="card-header">Login</h4>
//           <div className="card-body">
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 className="form-input"
//                 placeholder="Username"
//                 name="email"
//                 type="email"
//                 id="email"
//                 value={formState.email}
//                 onChange={handleChange}
//               />
//               <input
//                 className="form-input"
//                 placeholder="Password"
//                 name="password"
//                 type="password"
//                 id="password"
//                 value={formState.password}
//                 onChange={handleChange}
//               />
//               <button className="btn d-block w-100" type="submit">
//                 Submit
//               </button>
//             </form>

//             {/* {error && <div>Login failed</div>} */}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Login;