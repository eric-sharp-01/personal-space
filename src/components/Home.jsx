import React, { useEffect, useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Cookies from 'js-cookie';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import Battery90Icon from '@material-ui/icons/Battery90';
import WifiIcon from '@material-ui/icons/Wifi';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import LanguageIcon from '@material-ui/icons/Language';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import EmailIcon from '@material-ui/icons/Email';
import CloudIcon from '@material-ui/icons/Cloud';
import FolderIcon from '@material-ui/icons/Folder';
import SettingsIcon from '@material-ui/icons/Settings';
import NoteIcon from '@material-ui/icons/Note';
import RoomIcon from '@material-ui/icons/Room';
import ShopIcon from '@material-ui/icons/Shop';
import PaymentIcon from '@material-ui/icons/Payment';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ImageIcon from '@material-ui/icons/Image';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PersonIcon from '@material-ui/icons/Person';
import FaceIcon from '@material-ui/icons/Face';
import Axios from 'axios';
import bg from '../assets/bg-gta5.jpg';
import cellPhongBg from '../assets/bg-cell-phone.jpg';

const MAIN = 1;
const RECEIVERS = 2;
const MESSAGE_BOX = 3;
const MessageTemplate = function(content, senderId, receiverId) {
  this.content = content;
  this.senderId = senderId;
  this.receiverId = receiverId;
}

const Home = () => {
  const [screen, setScreen] = useState(1);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [receivers, setReceivers] = useState([]);
  const [receiver, setReceiver] = useState({});
  const [currentTime, setCurrentTime] = useState('');
  const username = Cookies.get('username');
  const id = Cookies.get('id');
  const socketRef = useRef();
  const endRef = useRef();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bg})`;
    let host = window.location.host;
    const socket = new WebSocket(`ws://${host}`);
    socketRef.current = socket;
    // Connection opened
    socket.addEventListener('open', function (event) {
        let action = {
          type: 'register',
          userId: id
        }
        socket.send(JSON.stringify(action));
    });
    // Listen for messages
    socket.addEventListener('message', function (event) {
        let values = JSON.parse(event.data);
        setMessages(prev => {
          return [...prev, new MessageTemplate(values.content, values.senderId, values.receiverId)]
        })
    });
  }, [id, setMessages]);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toTimeString().substr(0, 8));
    }, 1000);
  }, [setCurrentTime])

  useEffect(() => {
    switch(screen){
      case RECEIVERS:
        Axios.get(`/api/receivers`).then(res => {
          setReceivers(res.data);
        });
        break;
      case MESSAGE_BOX:
        Axios.get(`/api/chats`).then(res => {
          let records = (res.data || []).map(item => new MessageTemplate(item.content, item.senderId, item.receiverId))
          setMessages(records);
        });
        break;
      case MAIN:
        break;
      default:
        break;
    }
  }, [screen, setMessages]);

  useEffect(() => {
    if(screen === MESSAGE_BOX && messages.length){
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, screen]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const openMessageBox = (item) => {
    setScreen(MESSAGE_BOX);
    setReceiver(item);
  }

  const openReceivers = () => {
    setScreen(RECEIVERS);
  }

  const back = () => {
    setScreen(MAIN);
  }

  const send = () => {
    let socket = socketRef.current;
    let action = { type: 'message', content: message, username, senderId: id, receiverId: receiver.id };
    socket.send(JSON.stringify(action));
    setMessages([...messages, new MessageTemplate(message, id, receiver.id)]);
    setMessage('');
  }

  const jump = (url) => {
    window.open(url, '_blank').focus();
  }

  const enter = (e) => {
    if(e.key === 'Enter'){
      send();
    }
  }

  let mainScreen = null;
  let headerClass = 'header';
  let footerClass = 'footer';
  switch(screen){
    case MAIN:
      mainScreen = <Box className="main-screen">
        <Box height="50px"></Box>
        <Box className="row">
          <Box className="col"><AccountBoxRoundedIcon className="cell-phone-icon" /></Box>
          <Box className="col" onClick={() => jump('https://mail.google.com/mail/u/0/#inbox')}><EmailIcon className="cell-phone-icon" /></Box>
          <Box className="col" onClick={() => jump('https://onedrive.live.com/about/en-us/signin/')}><CloudIcon className="cell-phone-icon" /></Box>
          <Box className="col"><FolderIcon className="cell-phone-icon" /></Box>
        </Box>
        <Box className="row">
          <Box className="col"><SettingsIcon className="cell-phone-icon" /></Box>
          <Box className="col"><NoteIcon className="cell-phone-icon" /></Box>
          <Box className="col" onClick={() => jump('https://www.google.com.au/maps/@-28.1721432,132.7626855,5z')}><RoomIcon className="cell-phone-icon" /></Box>
          <Box className="col" onClick={() => jump('https://store.google.com/')}><ShopIcon className="cell-phone-icon" /></Box>
        </Box>
        <Box className="row">
          <Box className="col"><PaymentIcon className="cell-phone-icon" /></Box>
          <Box className="col"><AccessAlarmIcon className="cell-phone-icon" /></Box>
          <Box className="col"><FlightTakeoffIcon className="cell-phone-icon" /></Box>
          <Box className="col"><ImageIcon className="cell-phone-icon" /></Box>
        </Box>
        <Box className="row">
          <Box className="col" onClick={() => jump('  https://www.youtube.com/')}><PlayCircleFilledIcon className="cell-phone-icon" /></Box>
          <Box className="col"><SportsEsportsIcon className="cell-phone-icon" /></Box>
        </Box>
        <Box flex={1}></Box>
        <Box className="row">
          <Box className="col"><PhoneIcon className="cell-phone-icon" /></Box>
          <Box className="col" onClick={openReceivers}><MessageIcon className="cell-phone-icon" /></Box>
          <Box className="col" onClick={() => jump('https://www.google.com/')}><LanguageIcon className="cell-phone-icon" /></Box>
          <Box className="col"><CameraAltIcon className="cell-phone-icon" /></Box>
        </Box>
      </Box>;
      break;
    case RECEIVERS:
      headerClass = 'header header-active';
      mainScreen = <Box className="main-screen" bgcolor="#f1f1f1">
        <Box className="receivers">
          <Box className="head-icon">
            <PersonIcon  style={{ fontSize: '80px' }}/>
          </Box>
          {receivers.map(item => <Box onClick={() => openMessageBox(item)} className="item" key={item.id}>{item.nickname}</Box>)}
        </Box>
      </Box>
      footerClass = "footer footer-active";
      break;
    case MESSAGE_BOX:
      headerClass = 'header header-active';
      let elems = messages.map((item, index) => {
        let itemClass = Number(item.senderId) === Number(id) ? "item right" : "item left";
        return <Box className={itemClass} key={index}>
        <Box className="content">{item.content}</Box>
        <Box className="head">
          <FaceIcon />
        </Box>
      </Box>;
      })
      mainScreen = <Box className="main-screen" bgcolor="white">
        <Box className="to-user">
          <Box className="back" onClick={() => setScreen(RECEIVERS)}><ArrowBackIosIcon /></Box>
          {receiver.nickname}&nbsp;&nbsp;{receiver.phoneNumber}
        </Box>
        <Box className="chat">
          <Box className="chat-frame">
            {elems}
            <Box ref={endRef}></Box>
          </Box>
        </Box>
        <Box className="action">
          <InputBase className="input-base" value={message} onKeyPress={enter} onChange={handleMessageChange}/>
          <Button className="send" variant="contained" onClick={send} disabled={!message}>
            <SendIcon />
          </Button>
        </Box>
      </Box>
      footerClass = "footer footer-active";
      break;
    default:
      break;
  }
  return <Container maxWidth="lg" className="home">
    <Box className="section-1">
      <Box className="cell-phone" style={{backgroundImage: `url(${cellPhongBg})`}}>
        <Box className={headerClass}>
          <Box className="item time">{currentTime}</Box>
          <Box className="empty"></Box>
          <Box className="item"><WifiIcon className="header-icon" /></Box>
          <Box className="item"><SignalCellularAltIcon className="header-icon" /></Box>
          <Box className="item"><Battery90Icon className="header-icon" /></Box>
        </Box>
        {mainScreen}
        <Box className={footerClass}>
          <Box className="item"><BookmarkIcon className="footer-icon" /></Box>
          <Box className="item"><TripOriginIcon className="footer-icon" /></Box>
          <Box className="item" onClick={back}><ArrowBackIcon className="footer-icon" /></Box>
        </Box>
      </Box>
    </Box>
  </Container>;
}

export default Home;