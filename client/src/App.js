import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Logo from "./assets/images/Logo-2.png";

import { Link } from 'react-router-dom';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { ApolloClient, InMemoryCache } from '@apollo/client';

import "./App.css";
// import "../src/components/Calendar/calendar.css"
import Grocery from "./components/Item";
import RevoCalendar from 'revo-calendar'
import 'revo-calendar/dist/index.css'
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import CalendarApp from "./components/Calendar/calendar";
// import Home from './pages/Home';

// import './components/Chat/ChatApp.css';
// import ChatApp from "./components/Chat/ChatApp";


const client = new ApolloClient({
  uri: '//localhost:3001/graphql'
});

function App() {


  return (
    <ApolloProvider client={client}>
      <Router>

        <div>
          <nav>
            <Header />
            <ul>
              <li>
                <Link to="/Login" class="nav-link">Login/Sign Up</Link>
              </li>
              <li>
                <Link to="/CalendarApp" class="nav-link">Calendar</Link>
              </li>
              <li>
                <Link to="/Grocery" class="nav-link">Grocery List</Link>
              </li>
              <li>
                <Link to="/ChatApp" class="nav-link">Family Chat</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/ChatApp">
              <ChatApp />
            </Route>
            <Route path="/Grocery">
              <Grocery />
            </Route>
            <Route path="/CalendarApp">
              <CalendarApp />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
          </Switch>
        </div>

        {/* <Footer /> */}
      </Router>
    </ApolloProvider>

  );
}

export default App;
