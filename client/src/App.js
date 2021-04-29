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
// import Signup from "./Pages/Signup";

// import Calendar from './components/Calendar';
// import Nav from './components/Nav';
// import Signup from "./Pages/Signup";


import Home from './pages/Home';
import GroceryList from './pages/GroceryList';
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
            <h1 class="App">Family Calendar</h1>
            <div>
              <Fragment>
                <div className='calendar-margin'>
                  <RevoCalendar
                    events={eventList}
                    style={{
                      borderRadius: '5px',
                      border: '5px solid var(--primaryColor)'
                    }}
                    date={new Date()}
                    deleteEvent={deleteEvent}
                    highlightToday={true}
                    lang="en"
                    primaryColor="#023047"
                    secondaryColor="#ffffff"
                    todayColor="#3B3966"
                    textColor="#fb8500"
                    indicatorColor="#8ecae6"
                    animationSpeed={300}
                    sidebarWidth={180}
                    detailWidth={280}
                    showDetailToggler={true}
                    showSidebarToggler={true}
                    onePanelAtATime={false}
                    allowDeleteEvent={true}
                    allowAddEvent={true}
                    openDetailsOnDateSelection={true}
                    timeFormat24={true}
                    showAllDayLabel={false}
                    detailDateFormat="MM/DD/YYYY"
                    addEvent={(date) => {
                      setNewEventDate(date)
                      setShowAddEventModal(true)
                    }}
                  />
                </div>
                {showAddEventModal && (
                  <div className='addEventModal'>
                    <h2>Add your own event: </h2>
                    <div className='options'>
                      <code>
                        <pre>
                          <span className='codePink'></span>{ }
                        </pre>
                        <pre className='tab'>
                          Event Name:
                          <input
                            type='text'
                            value={newEventName}
                            onChange={(e) => setNewEventName(e.target.value)}
                          ></input>

                        </pre>
                        <pre className='tab'>
                          Date and Time:
                          <DatePicker
                            id='datePicker'
                            selected={newEventDate}
                            onChange={(date) => {
                              setNewEventDate(date)
                            }}
                            showTimeSelect
                            dateFormat='MM/dd/yy'
                          />
                          <label className='timeDisplay' htmlFor='datePicker'>{`${newEventDate.getHours() <= 9
                            ? '0' + newEventDate.getHours()
                            : newEventDate.getHours()
                            }:${newEventDate.getMinutes() <= 9
                              ? '0' + newEventDate.getMinutes()
                              : newEventDate.getMinutes()
                            }`}</label>
                          <span className='comment'>{ }</span>
                        </pre>
                        <pre className='tab'>
                          All Day Event:
                          <input
                            type='checkbox'
                            checked={newEventAllDay}
                            onChange={(e) => setNewEventAllDay(e.target.checked)}
                          />
                        </pre>
                        <pre className='tab2'>
                          Details:
                          <input
                            type='text'
                            value={newEventText}
                            onChange={(e) => setNewEventText(e.target.value)}
                          ></input>
                        </pre>
                        <pre>{ }</pre>
                        <div className='addEvent'>
                          <button
                            className='colorPickerBtn'
                            disabled={newEventName === ''}
                            onClick={addEvent}
                          >
                            Submit
                          </button>
                        </div>
                      </code>
                    </div>
                    <div onClick={() => setShowAddEventModal(false)}></div>
                  </div>
                )}
              </Fragment>
            </div>

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
