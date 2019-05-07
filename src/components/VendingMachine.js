import React from 'react'
import { Link } from 'react-router-dom';

class VendingMachine extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello I am a Vending Machine, what would you like to eat today?</h1>
        <h2>
          <Link to='/Chips'>Chips</Link>
        </h2>
        <h2>
          <Link to='Soda'>Soda</Link>
        </h2>
        <h2>
          <Link to='Sardines'>Sardines</Link>
        </h2>
      </div>
    )
  }
}

export default VendingMachine;
