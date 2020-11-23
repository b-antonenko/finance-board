import React from 'react';
import {connect} from "react-redux";
import * as actions from "../../actions";
import {bindActionCreators} from "redux";

function About ({value, add}) {
    return (
            <div>
                <h1>hello</h1>
                <p>{value}</p>
                <button onClick={add}>++++</button>
                <i className="fas fa-wallet"></i>
            </div>
        )

    };

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(About);
