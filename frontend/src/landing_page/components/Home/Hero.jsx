import React from 'react'

export default function Hero() {
    return (
        <div className="container mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="heroImage"/>
                <h1>Invest in Everything</h1>
                <p>Online platfrom to invest in stock, derivatives, mutual funds and more.</p>
                <button className="p-2 fs-lg-5 fs-5 btn btn-primary" style={{width: "15%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}