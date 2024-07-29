import React from 'react'
import { Link } from 'react-router-dom'
import '../css/LandingPage.css'
import Headroom from 'react-headroom'
import { TypeAnimation } from "react-type-animation";
import Header from './Header';

const LandingPage = () => {
  return (
    <div>
      <div className="hero">
        <Headroom>
          <Header />
        </Headroom>
        <section>
          <div className="main">
            <p className="line1">Empowering New <span style={{color:"#ff5100"}}>Entrepreneurs</span> to Succeed</p>
            <p className="line2 col-sm">
                Connect with mentors, find resources, and meet potential investors to kickstart your 
              <TypeAnimation
                sequence={[
                  " entrepreneurial journey.",
                  1000,
                  " entrepreneurial journey.",
                  1000,
                  " entrepreneurial journey.",
                  1000,
                ]}
                speed={250}
                repeat={Infinity}
                style={{ fontSize: "1.1em", color: "#ff5100" }}
              />
            </p><br />
            <div className="btns">
            <Link to="/signup" className="btn1">Join Now</Link>
            <Link to="/signup" className="btn2 btn1">Learn More</Link>
            </div>
          </div>
        </section>
      </div>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <img src="/icons/networking.png" alt="Networking" />
            <h3>Networking</h3>
            <p>Connect with like-minded entrepreneurs and mentors.</p>
          </div>
          <div className="feature">
            <img src="/icons/resources.png" alt="Resource Library" />
            <h3>Resource Library</h3>
            <p>Access articles, videos, and courses to help you start and grow your business.</p>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default LandingPage