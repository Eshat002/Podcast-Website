import React from 'react'
import './LandingPage.css'
import Hero from './Hero/Hero'
import Categories from './Categories/Categories'


const LandingPage = () => {
    const headline = <h1 className='headline-for-hero'>Your Daily <span style={{ color: "#CD4631" }}>Podcast</span></h1>
    return (
        <>
            <Hero
                headline={headline}
                subHeadline='We cover all kinds of categories and a weekly special guest.'

            />
            <Categories />

        </>
    )
}

export default LandingPage
