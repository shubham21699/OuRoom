// import Linkify from 'react-linkify';
 
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const Filter = require('bad-words')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const router = require('./router');
const { text } = require('express');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const DIR = './uploads/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
  storage: storage,
  // fileFilter: (req, file, cb) => {
  //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
  //         cb(null, true);
  //     } else {
  //         cb(null, false);
  //         return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  //     }
  // }
});


app.use(cors());
app.use(router);

app.post('/fileupload', upload.single('filen'), (req, res, next) => {
  const url = 'http://localhost:5000';
  //console.log(req.file)
  var link=url + '/uploads/' + req.file.filename;
  res.status(201).json({
    filen: req.file,
    message: link
  })
})

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);//
    console.log(user.name);
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    const filter = new Filter();
    message=filter.clean(message);
    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });


  socket.on('sendFile', (file, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: `File sent by ${user.name}` });
    io.to(user.room).emit('file', { userid:socket.id, link: file.file, fname: file.fname });
    callback();
  });

  socket.on('sendLocation', (coords, callback) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('message', {user : user.name, text: `https://google.com/maps?q=${coords.latitude},${coords.longitude}`})
    callback()
})

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(process.env.PORT || 5001, () => console.log(`Server has started.`));