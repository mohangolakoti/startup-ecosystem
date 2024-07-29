import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <section className="hero">
      <header className=''>
        <nav>
          <Link className='logo' to="/"><img src="/logo.png" alt="" />Platform Logo</Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="btns">
          <Link to="/signup"><button className="btn">Sign Up</button></Link>
          <Link to="/signup"><button className="btn1 btn">Join Now</button></Link>
          </div>
        </nav>
      </header>
      <section className="hero-text">
        <h1>Empowering New <span className='text-high'>Entrepreneurs</span> to Succeed</h1>
        <p>Connect with mentors, find resources, and meet potential investors to kickstart your entrepreneurial journey.</p>
        <Link to="/signup" className="cta1">Join Now</Link>
        <Link to="/signup" className="cta2 cta1">Learn More</Link>
        </section>
      </section>
      
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
      
      <section className="how-it-works">{/*  */}
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src="/icons/step1.png" alt="Step 1" />
            <h3>Sign Up and Create Your Profile</h3>
          </div>
          <div className="step">
            <img src="/icons/step2.png" alt="Step 2" />
            <h3>Explore Resources and Connect with Mentors</h3>
          </div>
          {/* <!-- Add more steps similarly --> */}
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <img src="/users/jane.jpg" alt="Jane Doe" />
            <p>"This platform helped me find the perfect mentor and secure my first investment!" - Jane Doe, Founder of Startup X</p>
          </div>
          <div className="testimonial">
            <img src="/users/john.jpg" alt="John Smith" />
            <p>"The resources available are invaluable for any new entrepreneur." - John Smith, CEO of Innovate Inc.</p>
          </div>
          {/* <!-- Add more testimonials similarly --> */}
        </div>
      </section>
      
      <section className="pricing">
        <h2>Pricing</h2>
        <div className="pricing-tiers">
          <div className="tier">
            <h3>Free Plan</h3>
            <p>Basic features like access to some resources and limited networking.</p>
            <Link to="/signup" className="cta">Choose Plan</Link>
          </div>
          <div className="tier">
            <h3>Pro Plan</h3>
            <p>Advanced features such as full resource access, mentorship pairing, and more.</p>
            <Link to="/signup" className="cta">Choose Plan</Link>
          </div>
          {/* <!-- Add more pricing tiers similarly --> */}
        </div>
      </section>
      
      <section className="about-us">
        <h2>About Us</h2>
        <p>Our mission is to empower entrepreneurs with the tools and connections they need to succeed in their ventures.</p>
        <div className="team">
          <div className="team-member">
            <img src="/team/member1.jpg" alt="Team Member 1" />
            <h3>Member 1</h3>
            <p>Short bio of team member.</p>
          </div>
          {/* <!-- Add more team members similarly --> */}
        </div>
      </section>
      
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>Email: contact@platform.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Startup Lane, Innovation City, IN 45678</p>
        </div>
      </section>
      
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
    </div>
  )
}

export default LandingPage