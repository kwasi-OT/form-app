import React from 'react';

function Dashboard({user}) {
    return (
        <div className='dashboard'>
            <h3>Welcome, {user}!</h3>
            <p>You've successfully logged in.</p>
        </div>
    );
}

export default Dashboard;
