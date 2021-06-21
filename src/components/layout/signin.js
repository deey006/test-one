import React from 'react'
import { NavLink } from "react-router-dom"

const Signin = () => {
    return (
        <ul className="signin-components">
            <li className="move-left"><NavLink to='/'>Job Offers</NavLink></li>
            <li className="move-right"><NavLink to='/'>Sign Out</NavLink></li>
        </ul>
    )
}
export default Signin