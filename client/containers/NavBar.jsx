import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/yourfridge"><button>Your Fridge</button></Link>
        </div>  
    )
}

export default NavBar;