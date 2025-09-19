import React from 'react'

export default function Awards() {
    return (
        <div className="conatainer mt-5 px-5">
            <div className="row">
                <div className="col-6 px-5 ">
                    <img src="/media/images/largestBroker.svg" alt="largestBroker" />
                </div>
                <div className="col-6 px-5 ">
                    <h1>Largest Stock Broker in India</h1>
                    <p className="mb-5">
                        3+ million Zerodha's client contribute over 15% of all retail order volumes
                        <br/>
                        in india by daily trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct Mutual Funds</p></li>
                                <li><p>Bonds and Golds</p></li>
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" alt="pressLogo" style={{width: '85%'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}