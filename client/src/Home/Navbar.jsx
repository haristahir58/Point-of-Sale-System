import React,{useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import './Style/Navbar.css'; 
import LuckStoreImg from '../Images/luckystore.png'
import Cart from '../Images/cart.png'
import Background from '../Images/background.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <p>Smart <span>POS <img src={Cart} width="30px" height="30px" alt="Cart" /></span></p>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><Link to="/">Home</Link></li>

              <li><div className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" >Login</a>
                <div className={`dropdown-menu rounded-0 m-0 ${isOpen ? "show" : ""}`}aria-labelledby="dropdownMenuButton" >
        <NavLink to={"/admin/login"} className="dropdown-item" activeClassName="active">As Admin</NavLink>
       
        <a href="single.html" className="dropdown-item" activeClassName="active">As Manager</a>
       
        <NavLink to={"/user/login"} className="dropdown-item" activeClassName="active">
          As User
        </NavLink>

      </div>
    </div>
</li>

<li>
      <div className="nav-item dropdown" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
      
      <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Register</a>
      
      <div className={`dropdown-menu rounded-0 m-0 ${isOpen2 ? "show" : ""}`}aria-labelledby="dropdownMenuButton">

        <NavLink to="/user/register" className="dropdown-item" activeClassName="active">
          As User
        </NavLink>
        <a href="single.html" className="dropdown-item">
          As Manager
        </a>
        </div>
          </div>
</li>

            </ul>
          </nav>
    

        </div>
        <div className="row">
          <div className="col-2">
            <h1>DISCOVER AND SHOP <br /> THE TREND</h1>
            <p> In a world where you have unlimited choice, you need to compete for attention.<br />And this requires something more than selling other people’s products as a result <br />greatness will come. </p>
            <a href="" className="btn">SHOP NOW</a>
          </div>
          <div className="col-2">
            <img src={Background} alt="Background" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
