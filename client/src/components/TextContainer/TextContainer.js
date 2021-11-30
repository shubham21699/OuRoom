import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import chatLogo from '../../icons/chatLogo.png';
import './TextContainer.css';


const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
    <h2>Realtime Communication Without any Privacy issues <img className="chat-logo" src={chatLogo} alt="Logo" />  </h2> 
      {/* <h2>Realtime Communication Without any Privacy issues <span role="img" aria-label="emoji">💬</span></h2> */}
      {/* <h2>with  <span role="img" aria-label="emoji">❤️</span></h2> */}
      {/* <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2> */}
    </div>
    {
      users
        ? (
          <div>
            <h2>People currently in room:</h2>
            <div className="activeContainer">
              <h3>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h3>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;