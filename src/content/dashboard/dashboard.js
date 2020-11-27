import React from 'react';
import './dashboard.css';
import VerticalBar from './verticalBar/vertical-bar';
import InfoCards from './info-cards/info-cards';
import SomeGraphic from './some-graphic/spendings-graphic';
import SpendingsList from './spendings-list/spendings-list';



function Dashboard() {
    return (
        <div className='content'>
            <VerticalBar/>
            <InfoCards/>
            <SomeGraphic/>
            <div className='spending_section'>
                <h3>Last fadfsd operations</h3>
            <SpendingsList/>
            </div>
        </div>
    )
}

export default Dashboard;