import React from 'react'
import { useState, useRef} from 'react';
import ReactDOM from 'react-dom'
import Food from './Food.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem, createFood, selectFood, selectContents } from '../features/fridgeSlice'


const Fridge = () => {
    const newFood = useSelector(selectFood)
    const contents = useSelector(selectContents)
    const dispatch = useDispatch();
    const foodRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addItem(newFood));
        foodRef.current.value = '';
    }

    return  (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    ref={foodRef}
                    id='foodItem' 
                    type='text' 
                    placeholder='Add food...' 
                    onChange={e => dispatch(createFood(e.target.value))}/>
                    <button type='submit'>Add</button>
                </form>
            </div>
            <div>
                {contents.map((food, i) => <Food key={`f${contents[i]}`}food={food}/>)}
            </div>
        </div>
    )
}

export default Fridge;