import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigation">
            <div className='logo'>
                    <div>
                        <h1>Finance</h1>
                    </div>
            </div>
            <div className='navigation_items'>
                <h3>Pages</h3>
                <nav>
                    <li className='nav_item'>
                        <Link to="/home">Dashboard</Link>
                    </li>
                    <li className='nav_item'>
                        <Link to="/add">Create flow</Link>
                        </li>
                    <li className='nav_item'>
                        <Link to="/history">History</Link>
                    </li>
                    <li className='nav_item'>
                        <Link to="/stat">Statistic</Link>
                    </li>
                    <li className='nav_item'>
                        <Link to="/news">News</Link>
                        </li>
                    <li className='nav_item'>
                        <Link to="/forex">ForEx</Link>
                    </li>
                </nav>
            </div>
            <div className='break'>
            </div>
            <div className='navigation_about'>
                <li className='nav_item'>
                    <Link to="/about">About</Link>
                </li>
            </div>
        </div>
    )
}

export default Navigation;