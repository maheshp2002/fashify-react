import { NavLink } from 'react-router-dom';
import React from 'react';
import '../styles/navbar.scss';
import { LogoDark } from '../assets/index';

const Navbar = () => {
  return (
    <nav className='row p-0 m-0'>
     <img src={LogoDark} alt="Example" className='logo col-2 ms-3' />
     <div className="col-11 align-items-center d-flex justify-content-end">
      <div className='form-group w-25 me-3 mb-3'>
        <input type="text" className='form-control' placeholder='search...' />
        
      </div>
        <ul className='p-0 d-flex gap-2 justify-content-end align-items-center list-unstyled'>
          <li>
            <NavLink to="/" className={(navData) => (navData.isActive ? "active-link text-decoration-none" : 'nav-link text-decoration-none')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={(navData) => (navData.isActive ? "active-link text-decoration-none" : 'nav-link text-decoration-none')}>Cart</NavLink>
          </li>
        </ul>
     </div>
    </nav>
  );
};

export default Navbar;
