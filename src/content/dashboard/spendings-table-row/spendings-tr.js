import React from 'react';
import {connect} from "react-redux";

function SpendingsTableRows({list}) {

    return list.map((item)=> {
        return (
            <tr className='table-row'>
            <td>{item.type}</td>
            <td>{item.title}</td>
            <td>{item.target}</td>
            <td>{item.date}</td>
            <td>{item.amount} $</td>
        </tr>
        )

    })
};

const mapStateToProps = (state) => {
    return {
        list: state.operationsList
    }
};

export default connect(mapStateToProps)(SpendingsTableRows);