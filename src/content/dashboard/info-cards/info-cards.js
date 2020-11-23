import React from "react";
import './info-cards.css'
import {connect} from "react-redux";
import {countBudget, countTotalSpendings, returnLastSpendings, returnLastIncome} from '../../../Functions'
import { ReactComponent as Logo } from '../../../media/wallet-solid.svg';
import { ReactComponent as LogoIncome } from '../../../media/donate-solid.svg';
import { ReactComponent as LogoTotal } from '../../../media/compress-arrows-alt-solid.svg';
import { ReactComponent as LogoSpendings } from '../../../media/arrow-circle-down-solid.svg';




function InfoCards({operations}) {
    return (
        <div className='info_cards'>
            <div className='card_item'>
                <div className='card_elements'>
                    <Logo className='logo' />
                    <div className='card_info'>
                    <h5>
                        Current budget
                    </h5>
                    <p>
                        $ {countBudget(operations)}
                    </p>
                    </div>
                </div>
            </div>
            <div className='card_item '>
                <div className='card_elements'>
                    <LogoIncome className='logo'/>
                    <div className='card_info'>
                    <h5>
                        Last income
                    </h5>
                    <p>
                        $ {returnLastIncome(operations)}
                    </p>
                    </div>
                </div>
            </div>
            <div className='card_item'>
                <div className='card_elements'>
                    <LogoTotal className='logo'/>
                    <div className='card_info'>
                    <h5>
                        Total spendings
                    </h5>
                    <p>
                        $ {countTotalSpendings(operations)}
                    </p>
                    </div>
                </div>
            </div>
            <div className='card_item'>
                <div className='card_elements'>
                    <LogoSpendings className='logo'/>
                    <div className='card_info'>
                    <h5>
                        Last spendings
                    </h5>
                    <p>
                        $ {returnLastSpendings(operations)}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
   return {
        operations: state.operationsList
    }
};

export default connect(mapStateToProps)(InfoCards);
