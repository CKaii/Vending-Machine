import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css/Navbar.css'

class Navbar extends React.Component {
  render() {
    return(
      <div className='Navbar'>
        <NavLink exact activeClassName='Navbar-active' to='/'>
         Vending Machine
        </NavLink>
        <NavLink exact activeClassName='Navbar-active' to='/chips'>
          Chips
        </NavLink>
        <NavLink exact activeClassName='Navbar-active' to='/soda'>
          Soda
        </NavLink>
        <NavLink exact activeClassName='Navbar-active' to='/sardines'>
          Sardines
        </NavLink>
      </div>
    )
  }
}

export default Navbar;
