import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, Link } from 'react-router-dom';
import FridgeNav from '../components/FridgeNav.jsx'
import Fridge from '../components/Fridge.jsx'
import Recipes from '../components/Recipes.jsx'


const FridgePage = () => {
    return (
        <div className='fridgeContainer'>
            <div className='fridgeNav'>
                <FridgeNav />
            </div>
            <div className='fridgeRec'>
                <Routes>
                    <Route path="/" element={<Fridge />} />
                    <Route path="/recipes" element={<Recipes />} />
                </Routes>
            </div>
        </div>
    )
};

export default FridgePage;