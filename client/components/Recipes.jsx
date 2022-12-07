import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectSaved } from '../features/recipeSlice';
import SavedRecipe from './SavedRecipe.jsx';


const Recipes = () => {
    const savedRecipes = useSelector(selectSaved);

    return (
        <div className='savedRecipes'>
            <h3>Saved recipes...</h3>
            {savedRecipes.map((saved, i) => <SavedRecipe key={`s${i}`} saved={saved}/>)}
        </div>
    )
};

export default Recipes;