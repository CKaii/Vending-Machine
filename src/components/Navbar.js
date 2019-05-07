import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

class Navbar extends React.Component {
  render() {
    return(
      <div className='Navbar'>
        <NavLink exact activeClassName='Navbar-active' to='/'>
         Vending Machine
        </NavLink>
        <NavLink exact activeClassName='Navbar-active' to='/Chips'>
          Chips
        </NavLink>
        <NavLink exact activeClassName='Navbar-active' to='/Soda'>
          Soda
        </NavLink>
        <NavLink exact activeClassName='Navbar-active' to='/Sardines'>
          Sardines
        </NavLink>
      </div>
    )
  }
}

export default Navbar;
