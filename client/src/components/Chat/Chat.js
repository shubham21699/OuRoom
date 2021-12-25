import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Fade from 'react-reveal/Fade';
import './Chat.css';
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import fileDownload from 'js-file-download'
const axios = require('axios')
const ENDPOINT = 'http://localhost:5001/';

let socket;

const Chat = ({ location }) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [filename, setFileName] = useState('');
  const [fileInput1, setFileInput1] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      //console.log(message);
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on('file', message => {
      if(message.userid!=socket.id)
        handleDownload(message.link,message.fname)
      console.log(message);
      //console.log(message)
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

const handleDownload = (url, filename) => {
  // axios.get(url, {
  //   responseType: 'blob',
  // })
  // .then((res) => {
    fileDownload(url, filename)
  //})
}

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  const sendLocation = (event) => {
    event.preventDefault();
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported by your browser')
  }
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
     socket.emit('sendLocation', {
         latitude: position.coords.latitude,
         longitude: position.coords.longitude
     }, () => {
        //  $sendLocationButton.removeAttribute('disabled')
         console.log('Location shared!');  
     })
 })
    // if(message) {
    //   socket.emit('sendMessage', message, () => setMessage(''));
    // }
  }


  const sendFile = (event) => {
    event.preventDefault();

    if(filename) 
    {
      const formData = new FormData()
      formData.append('filen',filename)
      // axios.post("http://localhost:5001/fileupload/", formData)
      console.log(filename);
      socket.emit('sendFile',{file:filename, fname:filename.name}, () => setFileName(''));
      // fetch(
      //   'http://localhost:5001/fileupload/',
      //   {
      //     method: 'POST',
      //     body: formData,
      //   }
      // )
      // .then(response => response.json())
      // .then(res => {  
      //   console.log(res);
      // });
    }
  }
  return (
    <div className="outerContainer">
      <Fade top>
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} sendLocation={sendLocation} fileInput1={fileInput1} setFileName={setFileName} sendFile={sendFile}/>
      </div>
      </Fade>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;
