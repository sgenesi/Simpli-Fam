import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "./assets/images/Logo.png";

import { Link } from 'react-router-dom';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { ApolloClient, InMemoryCache } from '@apollo/client';

import "./App.css";
// import "../src/components/Calendar/calendar.css"
import Item from "./components/Grocery/index";
import RevoCalendar from 'revo-calendar'
import 'revo-calendar/dist/index.css'
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./Pages/Login";
import CalendarApp from "./components/Calendar/calendar";

// import Signup from "./Pages/Signup";
// import Nav from './components/Nav';
// import Signup from "./Pages/Signup";


import Home from './Pages/Home';
import GroceryList from './Pages/GroceryList';
// import './components/Chat/ChatApp.css';
import ChatApp from "./components/Chat/ChatApp";


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {


  return (
    <ApolloProvider client={client}>
      <Router>

        <div>
          <nav>
            <h1><a href="/">SimpliFam</a></h1>
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>
                <Link to="/ChatApp" class="nav-link">Family Chat</Link>
              </li>
              <li>
                <Link to="/Item" class="nav-link">Grocery List</Link>
              </li>
              <li>
                <Link to="/CalendarApp" class="nav-link">Calendar</Link>
              </li>
              <li>
                <Link to="/Login" class="nav-link">Login</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            {/* <Route>
              <App />
            </Route> */}
            <Route path="/ChatApp">
              <ChatApp />
            </Route>
            <Route path="/Item">
              <Item />
            </Route>
            <Route path="/CalendarApp">
              <CalendarApp />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </div>

      </Router>
    </ApolloProvider>

  );
}

export default App;
