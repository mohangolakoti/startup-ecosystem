import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="quick-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Subscribe to our newsletter" />
          <button type="submit">Subscribe</button>
        </div>
        <div className="social-media">
          <a href="#f"><img src="/icons/facebook.png" alt="Facebook" /></a>
          <a href="#f"><img src="/icons/twitter.png" alt="Twitter" /></a>
          <a href="#f"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
        </div>
      </footer>
  )
}

export default Footer