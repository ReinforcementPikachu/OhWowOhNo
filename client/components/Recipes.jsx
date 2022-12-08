import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectSaved } from '../features/recipeSlice';
import { selectUserId } from '../features/userSlice';
import SavedRecipe from './SavedRecipe.jsx';


const Recipes = () => {
    const savedRecipes = useSelector(selectSaved);
    const dispatch = useDispatch();
    const recipeUserId = useSelector(selectUserId)

    
    useEffect(() => {
        axios.get(`api/recipes/getrecipes/${recipeUserId}`)
        .then(res => res.data)
    }, [])

    return (
        <div className='savedRecipes'>
            <h3>Saved recipes...</h3>
            {savedRecipes.map((saved, i) => <SavedRecipe key={`s${i}`} saved={saved}/>)}
        </div>
    )
};

export default Recipes;