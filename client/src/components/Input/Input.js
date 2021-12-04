import React from 'react';
import './Input.css';
import location from '../../icons/location.png'

const Input = ({ setMessage, sendMessage, message , sendLocation,setFileName,sendFile,fileInput1}) => (
  
  <form className="form">
    {/* <button className="sendLocation" onClick={e => sendLocation(e)}><img className="location-logo" src={location} alt="Logo" />
    </button>   */}
    <img className="sendLocation" onClick={e => sendLocation(e)} src={location} alt="Logo" />
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton1" onClick={e => sendMessage(e)}>Send</button>
    <input style={{display:'none'}} type="file" onChange={({ target: { files } }) => setFileName(files[0])} ref={fileInput => fileInput1 = fileInput}/>
    <button className="sendButton1" onClick={(event) => {
      event.preventDefault();
      fileInput1.click();
      }}>Pick File</button>
    <button className="sendButton" onClick={e => sendFile(e)}>Upload</button>
  </form>
)

export default Input;