import React from 'react';
import { Link } from 'react-router-dom'

class Chips extends React.Component {
  render() {
    return(
      <div>
        <Link to='/'>Go Back</Link>
        Chips
      </div>
    )
  }
}

export default Chips;
