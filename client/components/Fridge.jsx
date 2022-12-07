import React from 'react'
import { useState, useRef} from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem, createFood, selectFood, selectContents, selectIngredients, clearIngredients } from '../features/fridgeSlice'
import { selectRecipes, returnedRecipes } from '../features/recipeSlice';
import Food from './Food.jsx';
import Recipe from './Recipe.jsx';


const Fridge = () => {
    const newFood = useSelector(selectFood);
    const contents = useSelector(selectContents);
    const ingredients = useSelector(selectIngredients);
    const recipes = useSelector(selectRecipes);
    const dispatch = useDispatch();
    const foodForm = useRef(null);
    const recipeForm = useRef(null)

    const addFood = (event) => {
        event.preventDefault();
        dispatch(addItem(newFood));
        foodForm.current.value = '';
    }

    const getRecipes = (event) => {
        event.preventDefault();
        dispatch(returnedRecipes(['cool recipe', 'nice recipe', 'good recipe']))
        console.log(recipes)
        dispatch(clearIngredients())
        recipeForm.current.reset();
        // axios.post('api/recipe', { ingredients })
        // .then(res => {
        //     addRecipe(res.data)
        // })
    }

    return  (
        <div>
            <div>
                <form onSubmit={addFood}>
                    <input 
                    ref={foodForm}
                    id='foodItem' 
                    type='text' 
                    placeholder='Add food...' 
                    onChange={e => dispatch(createFood(e.target.value))}/>
                    <button type='submit'>Add</button>
                </form>
            </div>
            <div>
                <form onSubmit={getRecipes} ref={recipeForm}>
                    {contents.map((food, i) => <Food key={`f${i}`} food={food}/>)}
                    <button type='submit'>Get recipes</button>
                </form>
            </div>
            <div>
                {recipes.map((recipe, i) => <Recipe key={`r${i}`} recipe={recipe}/>)}
            </div>
        </div>
    )
}

export default Fridge;