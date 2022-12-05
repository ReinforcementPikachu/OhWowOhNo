import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, Link } from 'react-router-dom';
import FridgeNav from '../components/FridgeNav.jsx'
import Fridge from '../components/Fridge.jsx'
import Recipes from '../components/Recipes.jsx'


export default FridgePage = () => {
    return (
        <div>
            <FridgeNav />
            <div> 
                <Routes>
                    <Route path="/fridge" element={<Fridge />} />
                    <Route path="/recipes" element={<Recipes />} />
                </Routes>
            </div>
        </div>
    )
}