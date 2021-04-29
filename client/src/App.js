import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';

// import FamilyCalendar from './components/Calendar';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { ApolloClient, InMemoryCache } from '@apollo/client';

import "./App.css";
import Item from "./components/Grocery";
import RevoCalendar from 'revo-calendar'
import 'revo-calendar/dist/index.css'
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";

// import Calendar from './components/Calendar';
// import Nav from './components/Nav';
// import Signup from "./Pages/Signup";


import Home from './Pages/Home';
import GroceryList from './Pages/GroceryList';
// import './components/Chat/ChatApp.css';
import ChatApp from "./components/Chat/ChatApp";
import Calendar from "./components/Calendar/calendar"


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
        
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/GroceryList" component={GroceryList} />
            </Switch>
          </div>
        </div>
        <div>
        <Login/>
        {/* <Signup/> */}
          <div>

            <div className="App">

              {/* <div>
                <FamilyCalendar />
              </div> */}
              <Footer />
            </div >
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App
