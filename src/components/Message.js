import React from 'react';
import '../styles.css/Message.css'

class Message extends React.Component {
  render () {
    return(
      <div className='Message'>
        {this.props.children}
      </div>
    )
  }
}

export default Message;
