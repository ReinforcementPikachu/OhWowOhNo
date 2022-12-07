import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, selectSaved } from '../features/recipeSlice';

const Recipe = (props) => {
    const { title, url } = props.recipe;
    console.log(props)
    const dispatch = useDispatch();

    const handleRecipe = () => {
        dispatch(addRecipe(recipe))
    };

    return (
        <div className='individualRecipe'>
            <p>{title}</p>
            <br/>
            <p>{url}</p>
            <button onClick={handleRecipe}>Add Recipe</button>
        </div>
    )
};

export default Recipe;