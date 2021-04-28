import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';

// import FamilyCalendar from './components/Calendar';
import { ChromePicker } from 'react-color'
import GitHubButton from 'react-github-btn'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Item from "./components/Item";
import { ApolloClient, InMemoryCache } from '@apollo/client';

import "./App.css";
import Item from "./components/Grocery";
import RevoCalendar from 'revo-calendar'
import 'revo-calendar/dist/index.css'
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import GroceryList from './pages/GroceryList';
import './components/Chat/ChatApp.css';
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
      name: 'Homer Simpson',
      date: +reso1,
      allday: false,
      extra: {
        icon:
          'M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z',
        text: 'party of 5'
      }
    },
    {
      name: 'Han Solo',
      date: +reso2,
      allday: false,
      extra: {
        icon:
          'M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z',
        text: 'party of 2'
      }
    },
    {
      name: 'Gandalf, the Grey',
      date: +reso3,
      allday: false,
      extra: {
        icon:
          'M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z',
        text: 'party of 9'
      }
    },
    {
      name: 'Britta Perry',
      date: +reso4,
      allday: false,
      extra: {
        icon:
          'M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z',
        text: 'party of 7'
      }
    },
    {
      name: 'Lunch with Michael',
      date: +lunchWithKevin,
      allday: false
    },
    {
      name: 'Meeting with Vito',
      date: +meetingWithVito,
      allday: false
    },
    {
      name: 'Dinner with Fredo',
      date: +dinnerWithFredo,
      allday: false
    },
    {
      name: 'Day after Tomorrow',
      date: +dayAfterTomorrow,
      allday: true,
      extra: {
        icon:
          'M12 9.312l-1.762.491 1.562.881-.491.871-1.562-.881.491 1.762-.963.268-.76-2.724-2.015-1.126v1.939l2 2-.707.707-1.293-1.293v1.793h-1v-1.793l-1.293 1.293-.707-.707 2-2v-1.939l-2.015 1.126-.761 2.724-.963-.268.491-1.762-1.562.882-.491-.871 1.562-.881-1.761-.492.269-.962 2.725.76 1.982-1.11-1.983-1.109-2.724.759-.269-.962 1.762-.491-1.563-.882.491-.871 1.562.881-.49-1.762.963-.269.76 2.725 2.015 1.128v-1.94l-2-2 .707-.707 1.293 1.293v-1.793h1v1.793l1.293-1.293.707.707-2 2v1.94l2.016-1.127.76-2.725.963.269-.492 1.761 1.562-.881.491.871-1.562.881 1.762.492-.269.962-2.725-.76-1.982 1.11 1.982 1.109 2.725-.76.269.963zm4-5.812v7.525c0 1.57-.514 2.288-1.41 3.049-1.011.859-1.59 2.107-1.59 3.426 0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-1.319-.579-2.567-1.589-3.426-.897-.762-1.411-1.48-1.411-3.049v-7.525c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5zm5 0v7.525c0 .587.258 1.145.705 1.525 1.403 1.192 2.295 2.966 2.295 4.95 0 3.59-2.909 6.5-6.5 6.5s-6.5-2.91-6.5-6.5c0-1.984.892-3.758 2.295-4.949.447-.381.705-.94.705-1.526v-7.525c0-1.934 1.567-3.5 3.5-3.5s3.5 1.566 3.5 3.5zm0 14c0 1.934-1.567 3.5-3.5 3.5s-3.5-1.566-3.5-3.5c0-1.141.599-2.084 1.393-2.781 1.01-.889 1.607-1.737 1.607-3.221v-.498h1v.498c0 1.486.595 2.33 1.607 3.221.794.697 1.393 1.64 1.393 2.781z',
        text: '-30º C'
      }
    }
  ])

  const [displayColorPicker, setDisplayColorPicker] = useState(0)
  const [showAddEventModal, setShowAddEventModal] = useState(false)

  const [highlightToday, setHighlightToday] = useState(true)
  const [lang, setLang] = useState('en')
  const [primaryColor, setPrimaryColor] = useState('#4F6995')
  const [secondaryColor, setSecondaryColor] = useState('#D7E6EE')
  const [todayColor, setTodayColor] = useState('#3B3966')
  const [textColor, setTextColor] = useState('#333333')
  const [indicatorColor, setIndicatorColor] = useState('orange')
  const [animationSpeed, setAnimationSpeed] = useState(300)
  const [sidebarWidth, setSidebarWidth] = useState(180)
  const [detailWidth, setDetailWidth] = useState(280)
  const [showDetailToggler, setShowDetailToggler] = useState(true)
  const [showSidebarToggler, setShowSidebarToggler] = useState(true)
  const [onePanelAtATime, setOnePanelAtATime] = useState(false)
  const [allowDeleteEvent, setAllowDeleteEvent] = useState(true)
  const [allowAddEvent, setAllowAddEvent] = useState(true)
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
    setShowAddEventModal(false)
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
        <div className="App">

          <div>

            <h1 class="App">Family Calendar</h1>
            <div>
              <Fragment>
                <div className='demo calendar-margin'>
                  <RevoCalendar
                    events={eventList}
                    style={{
                      borderRadius: '5px',
                      border: '5px solid var(--primaryColor)'
                    }}
                    date={new Date()}
                    deleteEvent={deleteEvent}
                    highlightToday={highlightToday}
                    lang={lang}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    todayColor={todayColor}
                    textColor={textColor}
                    indicatorColor={indicatorColor}
                    animationSpeed={animationSpeed}
                    sidebarWidth={sidebarWidth}
                    detailWidth={detailWidth}
                    showDetailToggler={showDetailToggler}
                    showSidebarToggler={showSidebarToggler}
                    onePanelAtATime={onePanelAtATime}
                    allowDeleteEvent={allowDeleteEvent}
                    allowAddEvent={allowAddEvent}
                    openDetailsOnDateSelection={openDetailsOnDateSelection}
                    timeFormat24={timeFormat24}
                    showAllDayLabel={showAllDayLabel}
                    detailDateFormat={detailDateFormat}
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
                          <span className='codePink'>var </span>newEvent = {'{'}
                        </pre>
                        <pre className='tab'>
                          name<label className='codePink'>:</label> "
                          <input
                            type='text'
                            value={newEventName}
                            onChange={(e) => setNewEventName(e.target.value)}
                          ></input>
                          ",
                        </pre>
                        <pre className='tab'>
                          date<label className='codePink'>:</label>
                          <DatePicker
                            id='datePicker'
                            selected={newEventDate}
                            onChange={(date) => {
                              setNewEventDate(date)
                            }}
                            showTimeSelect
                            dateFormat='dd/MM/yyyy'
                          />
                          <label className='timeDisplay' htmlFor='datePicker'>{`${newEventDate.getHours() <= 9
                            ? '0' + newEventDate.getHours()
                            : newEventDate.getHours()
                            }:${newEventDate.getMinutes() <= 9
                              ? '0' + newEventDate.getMinutes()
                              : newEventDate.getMinutes()
                            }`}</label>
                          , <span className='comment'>{'/* DD/MM/YYYY */'}</span>
                        </pre>
                        <pre className='tab'>
                          allDay<label className='codePink'>:</label>
                          <input
                            type='checkbox'
                            checked={newEventAllDay}
                            onChange={(e) => setNewEventAllDay(e.target.checked)}
                          />
                          ,
                        </pre>
                        <pre className='tab'>
                          extra<label className='codePink'>:</label> {'{'}
                        </pre>
                        <pre className='tab2'>
                          icon<label className='codePink'>:</label>"
                          <input
                            type='text'
                            value={newEventIcon}
                            onChange={(e) => setNewEventIcon(e.target.value)}
                          ></input>
                          ",
                        </pre>
                        <pre className='tab2'>
                          text<label className='codePink'>:</label>"
                          <input
                            type='text'
                            value={newEventText}
                            onChange={(e) => setNewEventText(e.target.value)}
                          ></input>
                          "
                        </pre>
                        <pre>{'}'}</pre>
                        <div className='addEvent'>
                          <button
                            className='colorPickerBtn'
                            disabled={newEventName === ''}
                            onClick={addEvent}
                          >
                            addEvent()
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
