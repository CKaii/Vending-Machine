import React from 'react';
import { Link } from 'react-router-dom'

class Soda extends React.Component {
  render() {
    return(
      <div>
        <Link to='/'>Go Back</Link>
        Soda
      </div>
    )
  }
}

export default Soda;
