
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { expenses, currency, budget } = useContext(AppContext);


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                 <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{size: 10}}>
                </input>
            
           </span>
        </div>
    );
};

export default BudgetValue;