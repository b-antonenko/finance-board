import React from 'react';
import './forex.css'
import {filterCurrency} from '../../Functions'
import ForexDetails from './forex-details/forex-details';

class Forex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    fetchUsers() {
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)

            .then(response => response.json())

            .then(data =>
                this.setState({
                    items: data,
                    isLoaded: false,
                })
            )

            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        const { error, isLoaded, items } = this.state;
        let currencies = filterCurrency(items);
        return (
            <React.Fragment>
                <div className='forex'>
                    <h3>Current currency rate</h3>
                    <div className='forex_items'>
                        {error ? <p>{error.message}</p> : null}
                        {!isLoaded ? (
                            currencies.map(item => {
                                return (
                                        <div className='card_item'>
                                            <div className='card_elements'>
                                                <div className='card_info_forex'>
                                                    <h5>
                                                        {item.txt}
                                                    </h5>
                                                    <p>
                                                        {item.rate} ₴
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                );
                            })
                        ) : (
                            <h3>Loading...</h3>
                        )}
                    </div>
                    <ForexDetails/>
                </div>
            </React.Fragment>
        )
    }
}

export default Forex;