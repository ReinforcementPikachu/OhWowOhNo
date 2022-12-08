import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, selectSaved } from '../features/recipeSlice';
import { selectUserId } from '../features/userSlice';

const Recipe = (props) => {
    const { recipe } = props;
    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();

    const handleRecipe = () => {
        dispatch(addRecipe(recipe))
        axios.post('api/recipe/addRecipe', { user_id: userId, recipe })
        .then(res => console.log('submit successful'))
        .catch(err => console.log(err))
    };

    return (
        <div className='individualRecipe'>
            <p>{recipe}</p>
            <button onClick={handleRecipe}>Add Recipe</button>
        </div>
    )
};

export default Recipe;