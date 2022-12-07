import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addIngredient, deleteItem } from '../features/fridgeSlice';

const Food = (props) => {
    const { food } = props;
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false)

    const foodClicked = () => {
        setToggle(prevState => !prevState)
    }

    const handleChange = (event) => {
        if (event.target.checked) {
            dispatch(addIngredient(event.target.value));
        }
    }

    const deleteFood = () => {
        dispatch(deleteItem(food))
    }

    return (
        <div className='foodWrapper' onClick={foodClicked}>
            <input type='checkbox' id={food} name={food} value={food} onChange={(e) => handleChange(e)}/>
            <label htmlFor={food}>{food}</label>
            <br/>
            {toggle && (<button onClick={deleteFood}>Delete Food</button>)}
        </div>
    )
};

export default Food;