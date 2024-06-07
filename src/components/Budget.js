
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { expenses,maxBudget,currency, budget, remaining } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.cost));
    }, 0);
    const onChangedValue = (val)=>{

        if(parseInt(val)> maxBudget) {
             alert(`The budget cannot exceed the max of funds: ${currency} ${maxBudget}`);
        } else if(parseInt(val)<totalExpenses) {
            alert(`you cannot reduce the budget lower than the spending`);
        }     
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                 <input
                        type='number'
                        id='budgetValue'
                        step="10"
                        onChange={event=>onChangedValue(event.target.value)}>
                </input>
            
           </span>
        </div>
    );
};

export default BudgetValue;