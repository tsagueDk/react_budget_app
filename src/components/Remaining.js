
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingValue = () => {
    const {currency, remaining } = useContext(AppContext);

    return (
        <div className='alert alert-success'>
            <span>Budget: {currency}{remaining}</span>
        </div>
    );
};

export default RemainingValue;