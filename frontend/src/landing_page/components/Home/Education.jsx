import React from 'react'

export default function Education() {
    return (
        <div className="conatainer mt-2 px-5">
            <div className="row">
                <div className="col-6 px-5 ">
                    <img src="/media/images/education.svg" alt="education" />
                </div>
                <div className="col-6 px-5 ">
                    <h1>Free and open market education</h1>
                    <div className="pe-5">
                        <p className="mt-5 mb-3">
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>
                        <a href="" className="me-5" style={{textDecoration:"none"}}>Varsity &nbsp; <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="pe-5">
                        <p className="mt-5 mb-3">
                            TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </p>
                        <a href="" className="me-5" style={{textDecoration:"none"}}>Trading Q&A<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}