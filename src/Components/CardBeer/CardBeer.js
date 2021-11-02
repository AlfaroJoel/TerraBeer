import React, { useState }from 'react';
import { Box, Image, Text, HStack, Button, Input } from '@chakra-ui/react';
import {FaPercentage} from 'react-icons/fa';
import {BsPlusLg, BsDashLg} from 'react-icons/bs';



const CardBeer = ({beer}) => {
  const [amountBeers, setAmountBeers] = useState(1);

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' mt='2rem'>
      <Image src={beer.image} boxSize='50%'/>
      <Text as='h1' fontSize='6xl' fontWeight='600' textAlign='center'>{beer.name}</Text>
      <Text as='i' color='#E68B42' fontSize='lg' fontWeight='500' textAlign='center'>{beer.pleasures}</Text>
      <Text textAlign='center' mt='.5rem' 
        fontSize='1.3rem' fontWeight='100' 
        color='#4B4B4B' mx='8px'
      >
        {beer.description}
      </Text>
      <Box width='80%' my='2rem'>

        <Box width='100%' display='flex' justifyContent='space-around' alignItems='center' mb='1.5rem'>
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

      <Box my='1rem' display='flex' flexDirection='column'>
        <HStack maxW="220px" my='1rem'>
          <Button 
            _hover={{backgroundColor: 'transparent'}}
            variant='outline' 
            onClick={()=> {amountBeers > 1 && setAmountBeers(amountBeers - 1);}}
          >
            <BsDashLg fontSize='3rem'/>
          </Button>
          <Input textAlign='center' fontSize='2rem' type='number' value={amountBeers}/>
          <Button
            _hover={{backgroundColor: 'transparent'}}
            variant='outline' 
            onClick={()=> {amountBeers < 6 && setAmountBeers(amountBeers + 1);}}
          >
            <BsPlusLg fontSize='3rem'/>
          </Button>
        </HStack>
        <Button 
          _hover={{backgroundColor: 'transparent'}} 
          variant='outline' fontSize='1.35rem'
        >
          ADD TO CART
        </Button>
      </Box>
      <Box mt='1.5rem' width='92%' height='2px' backgroundColor='#777'></Box>
    </Box>
  );
};

export default CardBeer;