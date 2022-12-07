import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipe, selectSaved } from '../features/recipeSlice';

const SavedRecipe = (props) => {
    const { saved } = props;
    const savedRecipes = useSelector(selectSaved)
    const dispatch = useDispatch();

    const deleteSaved = () => {
        dispatch(deleteRecipe(saved))
        console.log(savedRecipes)
    };

    return (
        <div className='individualSaved'>
            <p>{saved}</p>
            <button onClick={deleteSaved}>Delete Recipe</button>
        </div>
    )
};

export default SavedRecipe;