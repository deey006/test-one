import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Signin from "./signin"
import Signout from "./signout"


const NavBar = () => {
    return (
        <nav className="nav-wrapper">
                <div className="hamburger">
                </div>

                <div className="nav-container">
                    <div className="left-link">
                        <Link to='/' className="brand-logo">The LOGO</Link>
                    </div>

                    <div className="right-link">
                            <Signin/>
                            <Signout/>
                            <li className="employer"><Link to='/ForEmployer'>For Employers</Link></li>
                    </div>
                </div>
        </nav>
    )
}
    
export default NavBar