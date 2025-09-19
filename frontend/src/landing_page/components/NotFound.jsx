import React from "react";
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="container my-5">
            <div className="row text-start">
                <h1>404 Not Found</h1>
                <p>Sorry,the page you are looking doesn't exist</p>
                <Link style={{ textDecoration: "none"}} to="/">Go To Home</Link>
            </div>
        </div>
    )
}
