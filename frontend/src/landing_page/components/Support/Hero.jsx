import React from 'react'

export default function Hero() {
    return (
        <section className="container-fluid" id="support_hero">
            <div className="p-5" id="support_wrapper">
                <h3>Support Portal</h3>
                <a href="#">Track Tickets</a>
            </div>
            <div className='row p-5' id="support_wrapper">
                <div className="col-6 py-5">
                    <h3>Search for an answer or browse help topics to create a ticket.</h3>
                    <input type="text" placeholder={'Eg. how do  I activate F&O. Where its get rejected?'}/>
                    <a href="#">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="col-6 p-5">
                    <h3>Featured</h3>
                    <ol>
                        <li><a href="#">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="#">Latest Intraday leverages -MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    )
}