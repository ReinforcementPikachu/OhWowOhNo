import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'


const FridgeNav = () => {
    return (
        <div className='fridgeNav-wrapper'>
            <Link to="/yourfridge"><button>Your Fridge</button></Link>
            <Link to="/yourfridge/recipes"><button>Your Recipes</button></Link>
        </div>
    )
};

export default FridgeNav;