import React from 'react'
import Message from './Message'
import { Link } from 'react-router-dom';

class VendingMachine extends React.Component {
  render() {
    return(
      <div>
        <Message>
        <h1>Hello I am a Vending Machine, what would you like to eat today?</h1>
        </Message>
        <Message>
          <h2>
            <Link to='/chips'>Chips</Link>
          </h2>
          <h2>
            <Link to='/soda'>Soda</Link>
          </h2>
          <h2>
            <Link to='/sardines'>Sardines</Link>
          </h2>
        </Message>
      </div>
    )
  }
}

export default VendingMachine;
