import { NavLink } from 'react-router-dom';
import React from 'react';
import './navbar.css';
import { LogoDark } from '../assets/index';

const Navbar = () => {
  return (
    <nav className='row p-0 m-0'>
     <img src={LogoDark} alt="Example" className='logo col-2 ms-3' />
      <ul className='col-11 p-0 d-flex gap-2 justify-content-end align-items-center list-unstyled'>
        <li>
          <NavLink to="/" className={(navData) => (navData.isActive ? "active-link text-decoration-none" : 'nav-link text-decoration-none')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={(navData) => (navData.isActive ? "active-link text-decoration-none" : 'nav-link text-decoration-none')}>Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
