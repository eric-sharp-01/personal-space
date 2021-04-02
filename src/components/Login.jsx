import React, { useEffect, useRef, useState } from 'react';
import { InputBase, Box, Button } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HttpsIcon from '@material-ui/icons/Https';

const Login =  () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const send = () => {
    axios.post('/api/login', {
      username,
      password
    }).then(res => {
      history.replace('/');
    }).catch(err => {
      console.log('error');
    })
  }

  const enter = (e) => {
    if(e.key === 'Enter'){
      send();
    }
  }

  return <Box className="login">
    <Box className="frame">
      <Box className="header">Login</Box>
      <Box className="row">
        <Box className="label-box">
          <AccountBoxIcon />
        </Box>
        <InputBase value={username} name="username" className="input-box" onChange={handleUsernameChange} onKeyPress={enter} type="text"></InputBase>
      </Box>
      <Box className="row">
        <Box className="label-box">
          <HttpsIcon />
        </Box>
        <InputBase value={password} name="password" className="input-box" onChange={handlePasswordChange} onKeyPress={enter} type="password"></InputBase>
      </Box>
      <Box className="button-row"><Button variant="contained" color="primary" onClick={send}>Submit</Button></Box>
    </Box>
  </Box>;     
}

export default Login;