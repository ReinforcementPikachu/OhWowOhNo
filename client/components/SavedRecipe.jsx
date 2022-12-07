import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, selectSaved } from '../features/recipeSlice';

const SavedRecipe = (props) => {
    const { saved } = props;
    const dispatch = useDispatch();

    // const handleRecipe = () => {
    //     dispatch(addRecipe(recipe))
    // };

    return (
        <div>
            <p>{saved}</p>
            <button>Delete Recipe</button>
        </div>
    )
};

export default SavedRecipe;