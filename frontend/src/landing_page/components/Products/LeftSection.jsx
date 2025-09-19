import React from 'react'

export default function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-6">
                    <img src={imageUrl}/>
                </div>
                <div className="col-6" style={{marginTop: '7rem'}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{marginRight: "2rem", textDecoration:"none"}}>Try Demo &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn More &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay} style={{marginRight: "1rem"}} ><img src="/media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore}><img src="/media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}