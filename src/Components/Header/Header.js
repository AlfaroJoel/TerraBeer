import React, { useState } from 'react';
import logo from '../../Images/TerraBeerLogo.png';
import {FaShoppingCart} from 'react-icons/fa';
import { Image, Box, List, ListItem, ListIcon } from '@chakra-ui/react';
import Menu from '../Menu/Menu';

const Header = () => {
  const [active, setActive] = useState(false);

  return(
    <Box 
      position='fixed' width='100%' 
      display='flex' alignItems='center' 
      justifyContent='space-between'
      px='1.8rem' pb='2px'
      borderBottom='1px solid #999999'
      background='#fff' zIndex='99'
    >
      <Menu active={active} setActive={setActive}/>

      <List spacing={3} 
        className={ active ? 'nav-menu active' : 'nav-menu'} 
        color='#fff' fontSize='1.5rem'
      >
        <ListItem>
          Home
        </ListItem>
        <ListItem>
          Beers
        </ListItem>
        <ListItem>
          Accessories
        </ListItem>
        <ListItem>
          Factories
        </ListItem>
        <ListItem>
          Contact us
        </ListItem>
      </List>

      <Image src={logo} 
        alt='TerraBeer Logo' boxSize="6.5rem" 
        objectFit="cover"
      />
      <Box>
        <FaShoppingCart fontSize='1.85rem'/>
      </Box>
    </Box>
  );
};

export default Header;