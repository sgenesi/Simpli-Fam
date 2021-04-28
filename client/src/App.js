import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import FamilyCalendar from './components/Calendar';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import GroceryList from './pages/GroceryList';
import Login from './pages/Login';

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
        <div className="App">
          <div>
            <FamilyCalendar />
          </div>
          <Footer />
        </div >
      </Router>
    </ApolloProvider>
  );
}

export default App;

