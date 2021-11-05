import React, { useState } from 'react';
import logo from '../../Images/TerraBeerLogo.png';
import {FaShoppingCart} from 'react-icons/fa';
import { Image, Box, List, ListItem, Badge} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { useSelector } from 'react-redux';

const Header = () => {
  const [active, setActive] = useState(false);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return(
    <Box 
      position='fixed' width='100%' 
      display='flex' alignItems='center' 
      justifyContent='space-between'
      px={{base: '1.8rem', sm: '4.5rem'}}
      borderBottom='1px solid #999999'
      background='#fff' zIndex='99'
    >
      <Box display={{base: 'block', sm: 'none'}}>
        <Menu active={active} setActive={setActive}/>
      </Box>

      <List spacing={{base: '3', sm: '0'}}
        className={ active ? 'nav-menu active' : 'nav-menu'} 
        color={{base: '#fff', sm: '#000'}} fontSize={{base: '1.5rem', sm: '1.2rem'}}
      >
        <ListItem onClick={() => setActive(false)}>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem onClick={() => setActive(false)}>
          <Link to='/beers'>Beers</Link>
        </ListItem>
        <ListItem onClick={() => setActive(false)}>
          <Link to='/factories'>Our Factory</Link>
        </ListItem>
        <ListItem onClick={() => setActive(false)}>
          <Link to='/contact'>Contact us</Link>
        </ListItem>
      </List>
      
      <Link to='/'>
        <Image src={logo} 
          alt='TerraBeer Logo' boxSize={{base:'6.5rem', sm: '70px'}}
          objectFit="cover"
        />
      </Link>

      <Box position='relative'>
        <Link to='/cart'>
          <Box as={FaShoppingCart} fontSize={{base:'1.85rem', sm: '1.45rem'}}/>
          <Badge borderRadius='50%' colorScheme='none' fontSize={{base:'1.3rem', sm: '1rem'}} position='absolute' top='-10px' color='#E68B42'>{totalQuantity}</Badge>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;