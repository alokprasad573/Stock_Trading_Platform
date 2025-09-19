import React from 'react'

export default function Hero() {
    return (
        <div className="container w-100">
            <div className="row">
                <h1 className="text-center fs-2 mx-auto mt-5 mb-5 " style={{color: "#3d3d3d"}}>
                    We pioneered the discount broking model in India.
                    <br/>
                    Now, we are breaking ground with our technology.
                </h1>
            </div>

            <div className="row p-5 text-muted mt-5 border-top"
            style={{lineHeight: "1.7", fontSize: "1.1rem"}}>
                <div className="col-6 p-5 text-start">
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that
                        traders and investors face in India in terms of cost, support, and technology. We named the company
                        Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of
                        investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col-6 p-5 text-start">
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower
                        retail traders and investors.
                    </p>
                    <p>
                        <a href="#" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal
                        of growing the Indian capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#" style={{textDecoration:"none"}}>blog </a>
                        or see what the media is <a href="#" style={{textDecoration:"none"}}>saying about us</a> or learn more about our business and product <a href="#" style={{textDecoration:"none"}}>philosphies</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}