import React from 'react';
import FamilyCalendar from '../components/Calendar';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
    // const { loading, data } = useQuery(QUERY_THOUGHTS);
    // const { data: userData } = useQuery(QUERY_ME_BASIC);
    const loggedIn = Auth.loggedIn();

    return (
        <main>
            <div className="flex-row justify-space-between">
                {loggedIn && (
                    <div className="col-12 mb-3">
                        <FamilyCalendar />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                    {/* {loading ? (
                        <div>Loading...</div>
                    ) : ( */}
                    {/* <FamilyCalendar /> */}
                    )
                </div>

            </div>
        </main>
    );
};

export default Home;