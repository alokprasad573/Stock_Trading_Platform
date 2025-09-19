import React from 'react'

export default function Brokerage() {
    return (
        <div className="container">
            <div className="mt-5 row border-top">
               <div className="col-8 p-4">
                   <a href='#' style={{textDecoration: "none"}}>
                       <h3 className='fs-5'>Brokerage Calculator</h3>
                   </a>
                   <ul style={{textAlign: "start", lineHeight: "2.5"}}>
                       <li>
                           Call & Trade and RMs auto-squareoff: Additional cahrges of  ₹ 50 + GST per order.
                       </li>
                       <li>
                           Digital contract notes will be sent via e-mail.
                       </li>
                       <li>
                           Physical copies of contract notes. If required, shall be charged  ₹ 20 per contract note. Courier cahrges apply.
                       </li>
                       <li>
                           For NRI account (non-PIS), 0.5% or  ₹ 100 per executed order for equity (whichever is lower).
                       </li>
                       <li>
                           If account
                       </li>
                   </ul>
               </div>
                <div className="col-4 p-4">
                    <a href='#' style={{textDecoration: "none"}}>
                        <h3 className='fs-5'>List of Charges</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}