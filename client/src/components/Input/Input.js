import React from 'react';
import './Input.css';
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import { AddLocationAlt } from '@mui/icons-material';
import location from '../../icons/location.png'

const Input = ({ setMessage, sendMessage, message , sendLocation,setFileName,sendFile,fileInput1}) => (
  
  <form className="form">
    {/* <button className="sendLocation" onClick={e => sendLocation(e)}> <AddLocationAlt /> </button> */}
    <button className="sendLocation" onClick={e => sendLocation(e)}><img className="location-logo" src={location} alt="Logo" /></button>
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