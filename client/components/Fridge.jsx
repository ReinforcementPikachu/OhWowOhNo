import React from 'react'
import { useState, useRef} from 'react';
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../features/fridgeSlice'


const Fridge = () => {
    const [newFood, setFood] = useState('');
    const dispatch = useDispatch();
    const foodRef = useRef(null)

    const handleSubmit = (event) => {
        dispatch(addItem(newFood))
        event.preventDefault();
        foodRef.current.value = '';
    }


    return  (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                ref={foodRef}
                id='foodItem' 
                type='text' 
                placeholder='Add food...' 
                onChange={e => setFood(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Fridge;