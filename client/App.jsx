import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, Link } from 'react-router-dom';
import Login from './containers/Login.jsx'
import NavBar from './containers/NavBar.jsx'
import SignUp from './containers/SignUp.jsx'
import FridgePage from './containers/FridgePage.jsx'


export default App = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/fridge" element={<FridgePage />} />
                </Routes>
            </div> 
        </div>
    )
}