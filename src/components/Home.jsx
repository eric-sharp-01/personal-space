import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';

const Home =  () => {
  let items = {
    nameField: '姓名',
    name: 'chufeier',
    addressField: '地址',
    address: '日蚀大厦 顶层套房',
    posField: '职业',
    positions: '卡车司机, 公交车司机'
  };
  return <Container maxWidth="lg" className="home">
    <Box display="flex" flexDirection="column" alignItems="flex-start" className="main-block">
      <Box>{items.nameField}: {items.name}</Box>
      <Box>{items.addressField}: {items.address}</Box>
      <Box>{items.posField}: {items.positions}</Box>
      <Box position="absolute" className="image-block">
        <img src="head.jpg" alt="not found"/>
      </Box>
    </Box>
    <Box display="flex" justifyContent="flex-end">
      <Box className="image-block">
        <img src="head.jpg" alt="not found"/>
      </Box>
    </Box>
  </Container>;
}

export default Home;