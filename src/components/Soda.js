import React from 'react';
import Message from './Message'
import '../css/Soda.css'
import { Link } from 'react-router-dom'

class Soda extends React.Component {
  render() {
    return(
      <div className='Soda'>
        <Message>
          <h1>SODA!! This vending machine only has one option to choose from:</h1>
          <h2>Coke - Taste the Feeling</h2>
          <Link to='/'>Go Back</Link>
        </Message>
      </div>
    )
  }
}

export default Soda;
