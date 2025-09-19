import React from 'react'

export default function Hero() {
    return (
        <div className='container'>
            <div className='text-center mt-5 p-3'>
                <h1>Technology</h1>
                <h4 className='text-muted mt-3 fs-4'>Sleek, modern and intutive trading platforms.</h4>
                <p className='mt-3'>Chechout for {" "}
                    <a href="" style={{textDecoration:"none"}}>
                        investment offerings {" "} <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}