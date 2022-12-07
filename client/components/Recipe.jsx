import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, selectSaved } from '../features/recipeSlice';

const Recipe = (props) => {
    const { recipe } = props;
    const dispatch = useDispatch();

    const handleRecipe = () => {
        dispatch(addRecipe(recipe))
    };

    return (
        <div>
            <p>{recipe}</p>
            <button onClick={handleRecipe}>Add Recipe</button>
        </div>
    )
};

export default Recipe;