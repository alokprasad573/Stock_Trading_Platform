import React from 'react'

export default function Pricing() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4 pe-5">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col-4 border p-3">
                            <h1 className="text-warning"><i className="fa-solid fa-indian-rupee-sign fa-2xs"></i>0</h1>
                            <p className="text-secondary">Free account opening</p>
                        </div>
                        <div className="col-4 border p-3">
                            <h1 className="text-warning"><i className="fa-solid fa-indian-rupee-sign fa-2xs"></i>0</h1>
                            <p className="text-secondary">Free equity delivery <br/> and direct mutual funds</p>
                        </div>
                        <div className="col-4 border p-3">
                            <h1 className="text-warning"><i className="fa-solid fa-indian-rupee-sign fa-2xs"></i>20</h1>
                            <p className="text-secondary">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}