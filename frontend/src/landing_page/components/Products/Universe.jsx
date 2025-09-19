import React from 'react'

export default function Universe() {
    return (
        <div className='container'>
            <div className="mt-5 text-center d-flex flex-column align-items-center justify-content-center gap-3">
                <div>
                    <h1>The Zerodha Universe</h1>
                    <p className="text-muted fs-5">Extend your trading and investment experience even further with our
                        partner platforms</p>
                </div>
                <img src="/media/images/zerodhaUniverse.png" style={{width: '80%'}}/>
                <button type="button" className="btn btn-lg btn-hover-black" style={{backgroundColor: "#387ED1" ,color:"white"}}>Sign up for free</button>
            </div>
        </div>
    )
}