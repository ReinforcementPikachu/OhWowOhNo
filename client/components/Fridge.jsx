import React, { useEffect } from 'react'
import { useState, useRef} from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem, createFood, selectFood, selectContents, selectIngredients, clearIngredients } from '../features/fridgeSlice'
import { selectRecipes, returnedRecipes } from '../features/recipeSlice';
import Food from './Food.jsx';
import { selectUserId, selectUsername } from '../features/userSlice';

import Recipe from './Recipe.jsx';


const Fridge = () => {
    const newFood = useSelector(selectFood);
    const contents = useSelector(selectContents);
    const ingredients = useSelector(selectIngredients);
    const fridgeUserId = useSelector(selectUserId)
    const fridgeUsername = useSelector(selectUsername)
    const recipes = useSelector(selectRecipes);
    const dispatch = useDispatch();
    const foodForm = useRef(null);
    const recipeForm = useRef(null)


    console.log('userId in fridge', fridgeUserId)
    console.log('username in fridge', fridgeUsername)

    useEffect(()=>{
        axios.get(`/api/fridge/${fridgeUserId}`)
        .then(res => {
            dispatch(addItem(res.data))
        })
        .catch(err => console.log(err))
    }, [])
    
    const addFood = (event) => {
        event.preventDefault();
        dispatch(addItem(newFood));
        axios.post('api/fridge', { user_id: fridgeUserId, ingredient: newFood })
        .then(res => console.log ('request successful'))
        .catch(err => console.log(err))
        foodForm.current.value = '';
    }

    const getRecipes = (event) => {
        event.preventDefault();
        const recipeArray = [];
        const recipeIdArray = [];
        const ingredientString = ingredients.map((food, i) =>  {
            if (i === 0) {
              return `${food}`;
            }
            else {
              return `,+${food}`;
            }
          }).join('');  
        console.log(ingredientString)      
        axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}&apiKey=f275a7ebbc2f42d583a70642829cfe07`)
        .then(res => {
            console.log(res.data, 'res.data')
            res.data.forEach((element)=>{
                recipeArray.push(element.title)
                recipeIdArray.push(element.id)
            })
            dispatch(returnedRecipes(recipeArray)) 
        })
        .catch(err => console.log(err))
        console.log(recipes, 'recipes')
        dispatch(clearIngredients())
        recipeForm.current.reset();
    }

    return  (
        <div className='container'>
            <div className='fridge-wrapper'>
                <form ref={recipeForm}>
                    {contents.map((food, i) => <Food key={`f${i}`} food={food}/>)}
                </form>
            </div>
            <div className='add-wrapper'>
                <form>
                    <input 
                    ref={foodForm}
                    id='foodItem' 
                    type='text' 
                    placeholder='Add food...' 
                    onChange={e => dispatch(createFood(e.target.value))}/>
                </form>
                <button onClick={addFood}>Add</button>
                <button className='recipeButton' onClick={getRecipes}>Get recipes</button>
            </div>
            <div className='recipes-wrapper'>
                {recipes.map((recipe, i) => <Recipe key={`r${i}`} recipe={recipe}/>)}
            </div>
        </div>
    )
}

export default Fridge;