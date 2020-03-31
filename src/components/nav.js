import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div className='nav-container'>
      {/* <h1 className='nav-h1'>MIKLO</h1> */}
      <Link className='home-link' to='/'>
        <h1>MIKLO</h1>
      </Link>
      {/* links for other pages */}
      <nav className='navigation'>
        <Link className='links' to='/about'>
          About
        </Link>
        <Link className='links' to='/blog'>
          Blog
        </Link>
        <Link className='links' to='/login'>
          Login/Signup
        </Link>
        {/* <li className='link'><Link to='/users' >Users</Link></li> */}
      </nav>
    </div>
  );
}

export default Nav;
