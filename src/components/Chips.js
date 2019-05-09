import React from 'react';
import { Link } from 'react-router-dom'
import Message from './Message'
import '../css/Chips.css'
import chipsImg from '../images/Chips.png'

class Chips extends React.Component {
  state = { bags: [] }

  handleClick = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState(prevState => ({
      bags: [...prevState.bags, { x,y }]
    }));
  }

  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img
        key={i}
        src={chipsImg}
        className='bag'
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
        alt='bag of chips'
      />
    ))
    return(
      <div className='Chips'>
        <Message>
          <h1>Bags eaten: {this.state.bags.length}</h1>
          <button onClick={this.handleClick}>noms</button>
          <Link to='/'>Go Back</Link>
        </Message>
        {bags}
      </div>
    )
  }
}

export default Chips;
