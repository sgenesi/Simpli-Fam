<<<<<<< HEAD
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function FamilyCalendar() {
    const [value, onChange] = useState(new Date());

    return (
        <container>
            <h1>Family Calendar</h1>
            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>
        </container>
    );
}

export default FamilyCalendar;

=======
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
>>>>>>> b719eae680fd4796847417cf2851c91bc331453b
