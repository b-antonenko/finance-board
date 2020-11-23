import React from 'react';
import './history.css';
import SpendingsList from '../dashboard/spendings-list/spendings-list';


function History() {

    return (
        <div className='spending_list'>
            <h2>Operations</h2>
            <div className='spendings_data'>
            <SpendingsList/>
            </div>
        </div>
    )
};

export default History;