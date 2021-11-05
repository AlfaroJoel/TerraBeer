import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import factory1 from '../../Images/imageHome3.jpg';
import {ImWhatsapp} from 'react-icons/im';
import {FaTelegramPlane} from 'react-icons/fa';
//{{base: '', sm: ''}}
const FactoriesPage = () => {
  return (
    <Box pt='7.5rem' width='100%' textAlign='center' >
      <Text as='h1' fontSize='1.8rem'>Factory October 12</Text>
      <Box display='flex' flexDirection={{base: 'column', sm: 'row'}}
        alignItems='center' px={{base: '0', sm: '2rem'}}
      >
        <Image mx='auto' src={factory1} boxSize={{base: '95%', sm: '420px'}} objectFit='cover' my='1rem'/>
        <Box display='flex' flexDirection='column'
          alignItems='center' px={{base: '0', sm: '2rem'}}>
          <Text fontSize='1.2rem'>
          We open the doors of our Factory on October 12 to show you the process of 
          making the beers that you enjoy so much. Our Factory Bar with more than 20 own styles, 
          invited beers and in collaboration with beer friends, to enjoy in the Bar or recharge your bottles
          and take them wherever you want. We will wait for you
          </Text>
          <Box my='1.5rem'>
            <Text as='h2' fontSize='1.5rem'>
          Schedules
            </Text>
            <Text >
          Bar ... Thursday, Friday and Saturday from 3pm to 8pm.
              <br/>
          Guided Tours ... Friday and Saturday at 4 p.m., 5 p.m. and 6 p.m.
          Up to 10 participants per visit
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FactoriesPage;
