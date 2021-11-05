import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import {ImWhatsapp} from 'react-icons/im';
import {FaTelegramPlane} from 'react-icons/fa';

const ContactPage = () => {
  return (
    <Box height='100vh' display='flex' flexDirection='column' 
      alignItems='center' textAlign='center' justifyContent='center'
    >
      <Text>Consult us prices, stock, and others through our social networks</Text>
      <Box display='flex' justifyContent='space-around' mt='20px' width='30%'>
        <a target='_blank'
          href='https://api.whatsapp.com/send?phone=542381518456' rel="noreferrer">
          <ImWhatsapp fontSize='2rem'/>
        </a>
        <a target='_blank' href='https://t.me/c/7782523123/2' rel="noreferrer">
          <FaTelegramPlane fontSize='2rem'/>
        </a>
      </Box>
    </Box>
  );
};

export default ContactPage;
