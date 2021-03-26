import React from 'react'

function Hero() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>Whats are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" ></Button>
            </div>
        </div>
    )
}

export default Hero;
