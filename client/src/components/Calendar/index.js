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

