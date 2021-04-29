import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';

// import FamilyCalendar from './components/Calendar';
import { ChromePicker } from 'react-color'
import GitHubButton from 'react-github-batn'
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
<<<<<<< HEAD
=======
// import Signup from "./Pages/Signup";
>>>>>>> 17b444fb0d927693eb31e3d9af1271729a00483f

// import Calendar from './components/Calendar';
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

  var reso1 = new Date()
  reso1.setHours(17, 0, 0)

  var reso2 = new Date()
  reso2.setHours(18, 15, 0)

  var reso3 = new Date()
  reso3.setHours(19, 30, 0)

  var reso4 = new Date()
  reso4.setHours(20, 45, 0)

  var lunchWithKevin = new Date()
  lunchWithKevin.setDate(lunchWithKevin.getDate() + 1)
  lunchWithKevin.setHours(13, 0, 0)

  var meetingWithVito = new Date()
  meetingWithVito.setDate(meetingWithVito.getDate() + 1)
  meetingWithVito.setHours(16, 30, 0)

  var dinnerWithFredo = new Date()
  dinnerWithFredo.setDate(dinnerWithFredo.getDate() + 1)
  dinnerWithFredo.setHours(20, 0, 0)

  var dayAfterTomorrow = new Date()
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)

  const [eventList, setEvents] = useState([
    {
      name: 'Grocery Pickup',
      date: +reso1,
      allday: false
    },
    {
      name: 'Nora Dance Practice',
      date: +reso2,
      allday: false
    },
    {
      name: 'Elena Soccer Practice',
      date: +reso3,
      allday: false
    },
    {
      name: 'BBQ with neighbors',
      date: +reso4,
      allday: false
    },
    {
      name: 'Lunch with Kevin',
      date: +lunchWithKevin,
      allday: false
    },
    {
      name: 'Parent teacher conference',
      date: +meetingWithVito,
      allday: false
    },
    {
      name: 'Dinner with in-laws',
      date: +dinnerWithFredo,
      allday: false
    },
    {
      name: 'Day after Tomorrow',
      date: +dayAfterTomorrow,
      allday: true
    }
  ])

  const [displayColorPicker, setDisplayColorPicker] = useState(0)
  const [showAddEventModal, setShowAddEventModal] = useState(false)

  const [openDetailsOnDateSelection, setOpenDetailsOnDateSelection] = useState(
    true
  )
  const [timeFormat24, setTimeFormat24] = useState(true)
  const [showAllDayLabel, setShowAllDayLabel] = useState(false)
  const [detailDateFormat, setDetailDateFormat] = useState('DD/MM/YYYY')

  const [newEventName, setNewEventName] = useState('')
  const [newEventDate, setNewEventDate] = useState(new Date())
  const [newEventAllDay, setNewEventAllDay] = useState(false)
  const [newEventIcon, setNewEventIcon] = useState('')
  const [newEventText, setNewEventText] = useState('')

  function deleteEvent(i) {
    var temp = eventList
    temp.splice(i, 1)
    setEvents(temp)
  }

  function addEvent() {
    setShowAddEventModal(true)
    var newEvent = {
      name: newEventName,
      date: newEventDate,
      allday: newEventAllDay,
      extra: {
        icon: newEventIcon,
        text: newEventText
      }
    }
    var temp = eventList
    temp.push(newEvent)
    setEvents([...temp])
  }

  useEffect(() => {
    var deleteEventFunction = `
    var temp = eventList
    temp.splice(i, 1)
    setEvents(temp)`

    var addEventFunction = `
    var newEvent = {
      name: newEventName,
      date: newEventDate,
      allday: newEventAllDay,
      extra: {
        icon: newEventIcon,
        text: newEventText
      }
    };
    var temp = eventList;
    temp.push(newEvent);
    setEvents([...temp]);`

    console.log(
      `%cfunction %cdeleteEvent %c() {\n`,
      'color: #f777c9',
      'color: #67fd6e',
      'color: #D7D7D7',
      deleteEventFunction,
      `\n}`
    )
    console.log(
      `%cfunction %caddEvent %c() {\n`,
      'color: #f777c9',
      'color: #67fd6e',
      'color: #D7D7D7',
      addEventFunction,
      `\n}`
    )
  }, [])

  useEffect(() => {
    console.log('%cEventList: ', 'color: #b788f4', eventList)
  }, [eventList])

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
