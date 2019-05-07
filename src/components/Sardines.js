import React from 'react';
import { Link } from 'react-router-dom';

class Sardines extends React.Component {
  render() {
    return(
      <div>
        <Link to='/'>Go Back</Link>
        Sardines
      </div>
    )
  }
}

export default Sardines;
