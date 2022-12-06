import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux';
import { addIngredient } from '../features/fridgeSlice';

const Food = (props) => {
    const { food } = props;
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.checked) {
            dispatch(addIngredient(event.target.value));
        }
    }

    return (
        <div>
            <input type='checkbox' id={food} name={food} value={food} onChange={(e) => handleChange(e)}/>
            <label htmlFor={food}>{food}</label>
        </div>
    )
};

export default Food;