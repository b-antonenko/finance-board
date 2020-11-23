import React from 'react';
import './vertical-bar.css'
import {Link} from 'react-router-dom';

function VerticalBar() {
    return (
        <div className='vertical_bar row'>
            <div className='col-12 col-md-8'>
                <input type='text' className='textfield input-group-text text-left' placeholder='search'/>
            </div>
            <div className='col-6 col-md-4 row'>
                <div className='col-auto income'>
                    <Link to="/add-cash"><i className="fa fa-plus-circle fa-5x plus" aria-hidden="true"></i></Link>
                </div>
                <div className='col-auto'>
                    <Link to='/add-spendings'><i className="fa fa-minus-circle fa-5x minus" aria-hidden="true"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default VerticalBar;