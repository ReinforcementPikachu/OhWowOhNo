import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './containers/Login.jsx';
import NavBar from './containers/NavBar.jsx';
import SignUp from './containers/SignUp.jsx';
import FridgePage from './containers/FridgePage.jsx';


const App = () => {
    return (
         <div>
            <NavBar />
                <div>
                <Routes>
                    <Route path="/signup/" element={<SignUp />} />
                    <Route path="/yourfridge/*" element={<FridgePage />} />
                    <Route path="/*" element={<Login />} />
                </Routes>
                </div>
        </div> 
    );
};

export default App;