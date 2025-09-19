import React from 'react'
import Hero from '../components/Pricing/Hero.jsx'
import Brokerage from '../components/Pricing/Brokerage';
import OpenAccount from "../components/OpenAccount.jsx";

export default function PricingPage() {
    return (
        <>
            <Hero/>
            <OpenAccount />
            <Brokerage />
        </>
    )
}