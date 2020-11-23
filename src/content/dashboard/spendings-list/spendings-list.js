import React from 'react';
import SpendingsTableRows from '../spendings-table-row/spendings-tr';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function SpendingsList({list}) {

    if (list.length > 0)  {
        return (
            <div>
                <table className='table table-hover'>
                    <thead>
                    <th className='td_type'>Type</th>
                    <th>Title</th>
                    <th>Target</th>
                    <th>Date</th>
                    <th>Amount</th>
                    </thead>
                    <tbody>
                    <SpendingsTableRows/>
                    </tbody>
                </table>
            </div>
        )
    } else
        return (
            <div>
                <p className='tablewarning'>No data. Please, <Link to='/add'>add</Link> any finance operation</p>
            </div>
        )
};

const mapStateToProps = (state) => {
    return {
        list: state.operationsList
    }
};

export default connect(mapStateToProps)(SpendingsList)