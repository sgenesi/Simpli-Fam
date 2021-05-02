import React from 'react';
import CalendarApp from '../components/Calendar/calendar';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import QUERY_USER from '../utils/queries';

const Home = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <CalendarApp />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;