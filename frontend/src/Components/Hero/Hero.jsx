import React from 'react'
import './Hero.css'
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn'
import HeroImage1 from '../../Img/heroShapeLeft.png'
import HeroImage2 from '../../Img/heroShapeRight.png'

const Hero = ({ headline = "headline", subHeadline = "sub-headline" }) => {
    return (
        <div id='hero'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg position-relative">
                        <img id="hero-image-1" src={HeroImage1} alt="shape" />
                    </div>
                    <div className="col-lg-7 text-center">
                        {/* <h1 className='headline'>{headline}</h1> */}
                        <div className="headline-container"> {headline}</div>

                        <h4 className='sub-headline'>{subHeadline}</h4>
                        <PrimaryBtn btnText="SUBSCRIBE" />
                    </div>
                    <div className="col-lg position-relative">
                        <img id='hero-image-2' style={{ width: "120px" }} src={HeroImage2} alt="shape" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
