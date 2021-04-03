import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';

const Input = (props) => {
  const { value, onChange, type, placeholder, className = "" } = props;
  let styles = {
    border: 'none',
    outline:'none'
  };

  return <Box borderRadius="4px" bgcolor="white" padding="5px" width="100%" className={className}>
        <input value={value} style={styles} onChange={onChange} type={type} placeholder={placeholder}></input>
      </Box>
}

export default Input;