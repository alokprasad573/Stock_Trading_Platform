import React from 'react'

export default function Stats() {
    return (
        <div className="container mt-5 px-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1>Trust with confidence</h1>
                    <br/>
                    <div className="mt-3 ">
                        <h3>Customer-first always</h3>
                        <p className="text-secondary">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
                            investments and contribute to 15% of daily retail exchange volumes in India.
                        </p>
                    </div>
                    <div className="mt-4 ">
                        <h3>No spam or gimmicks</h3>
                        <p className="text-secondary">No gimmicks, spam, "gamification", or annoying push notifications.
                            High quality apps that you use at your pace, the way you like. Our philosophies.
                        </p>
                    </div>
                    <div className="mt-4 ">
                        <h3>The Zerodha universe</h3>
                        <p className="text-secondary">Not just an app, but a whole ecosystem. Our investments in 30+
                            fintech startups offer you tailored services specific to your needs.
                        </p>
                    </div>
                    <div className="mt-4 ">
                        <h3>Do better with money</h3>
                        <p className="text-secondary">
                            With initiatives like Nudge and Kill Switch,
                            we don't just facilitate transactions, but actively help you do better with your money.
                        </p>
                    </div>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" alt="ecosytem" style={{ width: '100%' }} />
                    <div className="text-center">
                        <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore all our products &nbsp; <i className="fa-solid fa-arrow-right"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try Kite &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}