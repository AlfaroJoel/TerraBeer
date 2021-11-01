import React from 'react';
import { Image, Box, Text} from '@chakra-ui/react';


const CardHome = ({image, text, link}) => {
  return(
    <Box py='15px' display='flex' alignItems='center' justifyContent='center'>
      <Text position='absolute' zIndex='2' color='#fff' fontSize='2rem'>{text}</Text>
      <Box maxHeight='200px' overflow='hidden'>
        <Image className='imageDarken' objectFit='cover' boxSize='100%' src={image} objectPosition='center'/>
      </Box>
    </Box>
  );
};

export default CardHome;