import React from 'react'
import { NavLink } from "react-router-dom"

const Signout = () => {
    return (
        <ul className="signout-components">
            <li className="move-left"><NavLink to='/SignedIn'>Sign In</NavLink></li>
            <li className="move-right"><NavLink to='/CreateAccount'>Sign UP</NavLink></li>
        </ul>
    )
}
export default Signout