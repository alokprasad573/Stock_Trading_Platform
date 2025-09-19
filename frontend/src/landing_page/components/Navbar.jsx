import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top border-bottom navbar-light bg-light" style={{backgroundColor:"grey"}}>
            <div className="container">
                <Link className="navbar-brand p-2" to="/">
                    <img src="media/images/logo.svg" alt="logo" style={{width:"40%"}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link " to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}