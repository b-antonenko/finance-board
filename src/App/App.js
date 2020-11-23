import './App.css';
import Navigation from '../Navigation/navigation'
import Dashboard from '../content/dashboard/dashboard';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from '../content/about/about'
import History from '../content/history/history'
import React from "react";
import AddCash from '../content/add-cash/add-cash'
import AddSpendings from '../content/add-spendings/add-spendings';
import {ToastContainer} from "react-toastify";
import CreateFlow from '../content/create-flow/create-flow';


function App() {
  return (
    <div className="App">
            <div className='row'>
                <Navigation />
                <div className='main_content'>
                <Switch>
                    <Redirect from="/react-finance-board" to="/home" />
                <Route exact path='/home' component={Dashboard}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/history' component={History}/>
                <Route exact path='/add-cash' component={AddCash}/>
                <Route exact path='/add-spendings' component={AddSpendings}/>
                <Route exact path='/add' component={CreateFlow}/>
                </Switch>
                    <ToastContainer />
                </div>
            </div>
    </div>
  );
}


export default App
