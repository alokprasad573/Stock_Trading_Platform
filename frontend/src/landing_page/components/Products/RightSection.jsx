import React from 'react'

export default function RightSection({imageUrl, productName, productDescription, learnMore}) {
    return (
        <div className="container">
            <div className="row mx-5 my-5">
                <div className="col-6" style={{marginTop: '7rem'}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6">
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    )
}