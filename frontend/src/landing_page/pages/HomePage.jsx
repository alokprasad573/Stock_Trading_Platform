import React from 'react'
import Hero from '../components/Home/Hero'
import Awards from '../components/Home/Awards'
import Education from '../components/Home/Education'
import Pricing from '../components/Home/Pricing'
import Stats from '../components/Home/Stats'

import OpenAccount from '../components/OpenAccount'


export default function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Pricing />
            <Stats />
            <Education />
            <OpenAccount />
        </>
    )
}