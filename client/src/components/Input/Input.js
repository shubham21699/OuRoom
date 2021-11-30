import React from 'react';
import './Input.css';

const Input = ({ setMessage, sendMessage, message , sendLocation}) => (
  <form className="form">
    <button className="sendLocation" onClick={e => sendLocation(e)}>@</button>
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;