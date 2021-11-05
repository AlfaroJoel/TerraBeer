import React from 'react';
import { Image, Box, Text} from '@chakra-ui/react';


const CardHome = ({image, text, bottom}) => {
  return(
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Text position='absolute' zIndex='2' color='#fff' fontSize='2rem'>
        {text}
      </Text>
      <Box>
        <Image 
          className='imageDarken' objectFit='cover' 
          width={bottom ? {base:'100vw', sm:'50vw'} : {base:'100vw', sm:'100vw'}}
          height={bottom ?
            {base:'calc((100vh - 6.5rem) / 3)', sm:'calc(100vh - 52vh - 71px)'} :
            {base:'calc((100vh - 6.5rem) / 3)', sm:'52vh'}}
          src={image} 
        />
      </Box>
    </Box>
  );
};

export default CardHome;