import React from 'react'

export default function Hero(){
    return (
        <div className="container">
            <div className='text-center mt-5 d-flex flex-column justify-content-center align-items-center gap-3'>
                <div>
                    <h1>Charges</h1>
                    <p className='text-muted fs-5'>List of all charges and taxes</p>
                </div>
                <div className='row mx-5'>
                    <div className="col-4 p-5">
                        <img src="/media/images/pricingEquity.svg" alt="#" />
                        <h2>Free equity delivery</h2>
                        <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-4 p-5">
                        <img src="/media/images/intradayTrades.svg" alt="#" />
                        <h2>Intraday and F&O trades</h2>
                        <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹ 20 on all option trades.</p>
                    </div>
                    <div className="col-4 p-5">
                        <img src="/media/images/pricingMF.svg" alt="#" />
                        <h2>Free Direct MF</h2>
                        <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges</p>
                    </div>
                </div>
            </div>
        </div>
    )
}