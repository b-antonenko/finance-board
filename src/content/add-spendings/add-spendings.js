import React from 'react';
import './add-spendings.css';
import {currentDate} from '../../Functions'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from "../../actions";
import {bindActionCreators} from "redux";
import {toast} from "react-toastify";

class AddSpendings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'Spendings',
            title: ' ',
            target: ' ',
            date: currentDate(),
            amount: ' '
        };

    }

    notify = () => {
        toast.warn("Spendings successfully added!")
    };

    handleChangeTitle = (event) => {
        this.setState({title: event.target.value});
    };

    handleChangeAmount = (event) => {
        this.setState({amount: event.target.value});
    };

    handleChangeTarget = (event) => {
        this.setState({target: event.target.value});
    };

    addIncome =(e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log(this.state);
        this.props.add(this.state);
        history.push('/');
        this.notify();
    };

    render () {
        return (
            <div className='add-cash'>
                <h3>Add your last spendings:</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Type of flow:</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>{this.state.type}</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Operation name:</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               placeholder="Name your operation" onKeyUp={this.handleChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Operation target:</label>
                        <select className="form-control" onChange={this.handleChangeTarget}>
                            <option> </option>
                            <option>Shopping(cloth)</option>
                            <option>Shopping(food)</option>
                            <option>Shopping(alcohol)</option>
                            <option>Home payments</option>
                            <option>Taxes</option>
                            <option>Trips</option>
                            <option>Vacations</option>
                            <option>Restaurants</option>
                            <option>Food Delivery</option>
                            <option>Entertainment</option>
                            <option>Sport</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Operation date:</label>
                        <input className="form-control" type="text" placeholder={this.state.date} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Amount:</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               placeholder="$$$" onKeyUp={this.handleChangeAmount}/>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary confirm" onClick={this.addIncome}>Confirm</button>
                        <Link to='/'><button className="btn btn-primary">Cancel</button></Link>
                    </div>
                </form>
            </div>
        )
    }
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(null, mapDispatchToProps)(AddSpendings);