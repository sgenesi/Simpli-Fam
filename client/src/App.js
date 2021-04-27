import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import Item from "./components/Grocery";
import Calendar from 'react-calendar';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { v4 as uuidv4 } from "uuid";

import Login from './Pages/Login';
import './App.css';

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

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
  const [item, setItem] = useState("");
  const [list, setList] = useState(arr);
  const [value, onChange] = useState(new Date());

  const handleSubmit = (e) => {
    const newItem = {
      id: uuidv4(),
      item: item,
      complete: false,
    };
    e.preventDefault();
    if (item && item.length <= 25) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const Button = styled.button`
  color: #023047;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #023047;
  border-radius: 3px;
`;

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">

          </div>
        </div>

        <div className="App">

          <h1>Family Calendar</h1>
          <div>
            <Calendar
              onChange={onChange}
              value={value}
            />
          </div>

          <h1>Grocery List</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              value={item}
              placeholder="Enter the items"
              onChange={handleChange}
            />
            <Button>Add Item</Button>
            <br></br>
            <br></br>
          </form>
          <div>
            {list.map((c, id) => (
              <Item
                key={id}
                id={c.id}
                item={c.item}
                list={list}
                setList={setList}
                complete={c.complete}
                setItem={setItem}
              />
            ))}
          </div>
          <Footer></Footer>
        </div >
      </Router>
    </ApolloProvider>
  );
}

export default App;

