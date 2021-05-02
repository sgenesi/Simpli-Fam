import React from 'react';
import '../../src/App.css';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import QUERY_USER from '../utils/queries';

const Home = () => {

    return (
        <main>
            <section class='padding'>
                <div>
                    <h3 class="center">A simple way to organize your family</h3>
                </div>
                <div>
                    <p class="center">SimpliFam is a one stop shop where you can keep your family organized with a family calendar and grocery list.</p>
                </div>
            </section>

            <section class='blue padding'>
                <div>
                    <h3 class="right-align">Calendar</h3>
                </div>
                <div>
                    <p class="right-align">
                        Add events to a shared calendar with event name, date, time, and details section.
                    </p>
                </div>
            </section>
            <section class='padding'>
                <div>
                    <h3 class="left-align">Grocery List</h3>
                </div>
                <div>
                    <p class="left-align">
                        Keep your shopping trip organized with a grocery list that allows you to add items, update quantities, cross them off as they are purchased, and delete items.
                    </p>
                </div>
            </section>
            <section class='blue padding'>
                <div>
                    <h3 class="right-align">Family Chat</h3>
                </div>
                <div>
                    <p class="right-align">
                        Chat between family members or add notes for you to remember important details.
                    </p>
                </div>
            </section>

            <section class='bottom-padding'>
                <div>
                    <p class="center">Made with frustration by Robert, Staci, Lexie, and Micah</p>
                </div>
            </section>
        </main>
    );
};

export default Home;