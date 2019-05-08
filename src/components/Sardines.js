import React from 'react';
import Message from './Message'
import '../styles.css/Sardines.css'
import { Link } from 'react-router-dom';

class Sardines extends React.Component {
  render() {
    return(
      <div className='Sardines'>
        <Message>
          <h1>Watch Out! Sardines!</h1>
          <h2>You don't eat sardines. The sardines, they eat you!!</h2>
          <Link to='/'>Go Back</Link>
        </Message>
      </div>
    )
  }
}

export default Sardines;
