import React, { useState }from 'react';
import { Box, Image, Text, HStack, Button, Input } from '@chakra-ui/react';
import {FaPercentage} from 'react-icons/fa';
import {BsPlusLg, BsDashLg, BsCurrencyDollar} from 'react-icons/bs';
import BtnAddCart from './BtnAddCart';

const CardBeer = ({beer}) => {
  const [amountBeers, setAmountBeers] = useState(1);
  return (
    <Box mt='2rem' display={{base: 'block', sm: 'flex'}} width={{base: '100%', sm: '80%'}} mb={{sm: '50px'}}>
      <Image m={{base: 'auto'}} mr={{sm: '25px'}} src={beer.image} boxSize={{base: '50%', sm: '25%'}}/>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems={{base: 'center', sm: 'start'}}>
        <Text as='h1' fontSize={{base: '6xl', sm: '4xl'}} fontWeight='600' textAlign='center'>{beer.name}</Text>
        <Text as='i' color='#E68B42' fontSize={{base: 'lg', sm: 'md'}} fontWeight='500' textAlign='center'>{beer.pleasures}</Text>
        <Text textAlign={{base: 'center', sm: 'left'}} mt='.5rem' 
          fontSize='1.3rem' fontWeight='100' 
          color='#4B4B4B' mx='8px'
        >
          {beer.description}
        </Text>
        <Box width='100%' my='2rem' display={{sm: 'flex'}} alignItems='center'>
          <Box 
            width='100%' display='flex' justifyContent='space-around'
            alignItems='center' mb={{base: '1.5rem', sm: '0'}}
          >
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Box display='flex' flexDirection='row' mb='-15px' alignItems='center'>
                <Text fontSize='2.5rem'>{beer.features.alcohol}</Text>
                <FaPercentage fontSize='1.7rem'/>
              </Box>
              <Text fontSize='1.5rem' color='#4F4C4F'>Alcohol</Text>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Box display='flex' flexDirection='row' mb='-5px' alignItems='center'>
                <Text fontSize='1.9rem'>{beer.features.bitterness}</Text>
              </Box>
              <Text fontSize='1.5rem' color='#4F4C4F'>bitterness</Text>
            </Box>
          </Box>

          <Box width='100%' display='flex' justifyContent='space-around' alignItems='center'>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Box display='flex' flexDirection='row' mb='-12px' alignItems='center'>
                <Text fontSize='2.5rem'>{beer.features.IBU}</Text>
              </Box>
              <Text fontSize='1.5rem' color='#4F4C4F'>IBU</Text>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Box display='flex' flexDirection='row' mb='-5px' alignItems='center'>
                <Text fontSize='1.9rem'>{beer.features.OG}</Text>
              </Box>
              <Text fontSize='1.5rem' color='#4F4C4F'>O.G.</Text>
            </Box>
          </Box>

        </Box>

        <Box px='1.5rem'>
          <Text fontSize='lg' color='#333'>{beer.accompany}</Text>
        </Box>

        <Box my='1rem' display={{sm: 'flex'}} width={{sm: '100%'}} justifyContent='space-around'>
          <Text fontSize={{base: '2rem', sm: '2.7rem'}} display='flex' alignItems='center' justifyContent='center'>
            <BsCurrencyDollar fontSize='1.4rem'/>{(beer.price * amountBeers).toFixed(2)}
          </Text>
          <Box display='flex' flexDirection='column'>
            <HStack maxW="220px" my='1rem' >
              <Button 
                _hover={{backgroundColor: 'transparent'}}
                variant='outline' 
                onClick={()=> {amountBeers > 1 && setAmountBeers(amountBeers - 1);}}
              >
                <BsDashLg fontSize='3rem'/>
              </Button>
              <Input textAlign='center' fontSize='2rem' type='number' value={amountBeers} readOnly/>
              <Button
                _hover={{backgroundColor: 'transparent'}}
                variant='outline' 
                onClick={()=> {amountBeers < 12 && setAmountBeers(amountBeers + 1);}}
              >
                <BsPlusLg fontSize='3rem'/>
              </Button>
            </HStack>
            <BtnAddCart quantity={amountBeers} beer={beer} />
          </Box>

        </Box>
        <Box display={{base: 'block', sm: 'none'}} mt='1.5rem' width='92vw' height='2px' backgroundColor='#777'></Box>
      </Box>
    </Box>
  );
};

export default CardBeer;