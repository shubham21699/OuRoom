import React, { useState } from 'react';
import logo from '../../icons/logo1.png';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="upper-line" > Enjoy the best experience of communications </p>
        <p className="lower-line"> without any Privacy issues </p>

        <Fade top>
      <div className="joinInnerContainer">

        <h1 className="heading">Join Room</h1>
        <div>
          <input placeholder="Enter Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Enter Room Name given by Host" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
      </Fade>
    </div>
  );
}
