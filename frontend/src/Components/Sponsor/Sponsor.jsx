import React from 'react'
import './Sponsor.css'
import GoogleImage from '../../Img/googlepod.png'
import YTImage from '../../Img/yt.png'
import spotifyImage from '../../Img/spotify.png'

const Sponsor = () => {
    return (
        <div className='mb-5' id="sponsor">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6">
                        <h2 className='headline'>Supported by:</h2>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img src={spotifyImage} alt="spotify" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img src={GoogleImage} alt="googlepod" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img src={YTImage} alt="yt-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor
