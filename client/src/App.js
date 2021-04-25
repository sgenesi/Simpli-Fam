import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import Calendar from 'react-calendar';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Footer from './components/Footer';
import { v4 as uuidv4 } from "uuid";

import './App.css';

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
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

  return (
    <div className="App">

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
        <button className="btn" type="submit">
          Add Items
        </button>
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
  );
}

export default App;

