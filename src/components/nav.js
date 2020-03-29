import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav className='nav-container'>
      <img className='logo-img' src='' alt='nav-logo' />
      <h1 className='nav-h1'>Navigation component.</h1>
      {/* links for other pages */}
      <ul className='navigation'>
        <li className='link-container'>
          <Link className='links' to='/'>
            Home
          </Link>
        </li>
        <li className='link-container'>
          <Link className='links' to='/about'>
            About
          </Link>
        </li>
        {/* <li className='link'><Link to='/users' >Users</Link></li> */}
      </ul>
    </nav>
  );
}

export default Nav;
