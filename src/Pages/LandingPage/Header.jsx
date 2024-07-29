import React,{useState} from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import logo from './images/logo3.png'

const Header = () => {
  const [color,setColor] = useState(false)
  const colorHandler=()=>{
    if(window.scrollY>=90){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',colorHandler)
  return (
    <div>
      <nav className={color?'bg navbar navbar-expand-md':'navbar navbar-expand-md'}>
        <div class="container-fluid">
        <p class="navbar-brand" href="#"><img src={logo} alt="" /></p>
        
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <Link to="/signup"><button className="signup">Sign Up</button></Link>
                <Link to="/signup"><button className="join">Join Now</button></Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
