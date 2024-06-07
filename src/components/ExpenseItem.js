
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoIosAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{parseInt(props.cost)}</td>
        <td><IoIosAddCircle size='2.2em' color="green" onClick={handleDeleteItem}></IoIosAddCircle></td>
        <td><IoMdRemoveCircle size='2.2em' color="red" onClick={handleDeleteItem}></IoMdRemoveCircle></td>
        </tr>
    );
};

export default ExpenseItem;