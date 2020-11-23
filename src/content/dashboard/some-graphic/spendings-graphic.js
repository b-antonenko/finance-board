import React, { PureComponent } from 'react';
import './spendings-graphic.css';
import {connect} from 'react-redux';
import {sortSpendings} from '../../../Functions';
import {Link} from 'react-router-dom';

import {
    PieChart, Pie, Tooltip,
} from 'recharts';

/*const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];*/

class SomeGraphic extends PureComponent {

    render() {
        if (this.props.list.filter((item)=>{
            return item.type === "Spendings"}).length > 0) {
            return (
            <div className='some_graphic' onClick={()=>{console.log(this.props.list)}}>
                <h3>Spendings by target</h3>
                <PieChart width={800} height={500} className='graphic' margin={{ top: -50, right: 30, left: 300, bottom: 0 }}>
                    <Pie dataKey="value" isAnimationActive={true} data={sortSpendings(this.props.list)} cx={240} cy={240} outerRadius={120} fill="#72bcd4" label />
                    <Tooltip />
                </PieChart>
            </div>
        );
        } else
            return (
                <div className='some_graphic'>
                    <h3>Spendings by target</h3>
                    <p>No data. Please, <Link to='./add-spendings'>add</Link> operations that affect on your current budget</p>
                </div>
            )

    }
}

const mapStateToProps = (state) => {
    return {
        list: state.operationsList
    }
};

export default connect(mapStateToProps)(SomeGraphic);

