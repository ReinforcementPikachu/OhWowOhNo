import React from 'react'
import { useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../features/fridgeSlice'


const Fridge = () => {
    const [food, setFood] = useState();
    const dispatch = useDispatch();
    return  (
        <div>
            <input 
            id='foodItem' 
            type='text' 
            placeholder='Add food...' 
            onChange={e => setFood(e.target.value)}/>
            <button onClick={() => dispatch(addItem(food))}>Add</button>
        </div>
    )
}

export default Fridge;