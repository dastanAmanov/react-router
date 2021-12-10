import './Header.css'
import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <>
         <NavLink to="/">Home</NavLink>   
         <NavLink to="/users">Users</NavLink>   
         <NavLink to='/login'>Login</NavLink>   
        </>
    )
}

export default Header
