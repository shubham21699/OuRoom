import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import chatLogo from '../../icons/chatLogo.png';
import './TextContainer.css';


const TextContainer = ({ users }) => (
  <div className="textContainer">
    <h2>Realtime Communication Without any Privacy Issues <img className="chat-logo" src={chatLogo} alt="Logo" />  </h2> 
    <div className="video-container">
    {/* <h2><i>Add a Youtube video link to get started!</i></h2>  */}
    {/* <iframe className="videoPlayer" src="https://www.youtube.com/embed/pQN-pnXPaVg" width="350" height="250" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      {/* <h2>Realtime Communication Without any Privacy issues <span role="img" aria-label="emoji">💬</span></h2> */}
      {/* <h2>with  <span role="img" aria-label="emoji">❤️</span></h2> */}
      {/* <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2> */}
    </div>
    {
      users
        ? (
          <div className="textInnerContainer">
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
              <form className="videoForm">
                <input className="videoLink" type="text" placeholder="   Enter the video link here to play"  ></input>
                <button className="videoUpload" onClick={(event) => { 
                  event.preventDefault();
                  let link=document.querySelector('.videoLink')
                  let video = document.querySelector('.video-container')
                  let eqIndex=link.value.indexOf('=')
                  let code=""
                  if (eqIndex > -1){
                    code=link.value.substring(eqIndex+1)
                  } else {
                    code=link.value.substring((link.value.lastIndexOf('/'))+1)
                  }
                  let ytlink = `https://www.youtube.com/embed/${code}`
                  console.log(ytlink)
                  video.innerHTML=`<iframe className="videoPlayer" src=${ytlink} width="350" height="250" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                }}>UPLOAD LINK</button>
              </form>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;