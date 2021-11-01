import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';
import './Menu.css';

const Menu = ({active, setActive}) => {
  return (
    <Box onClick={() => setActive(!active)}>
      <div className={active ? 'hamburger active' : 'hamburger'}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </Box>
  );
};

export default Menu;