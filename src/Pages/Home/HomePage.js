import React from 'react';
import { Box } from '@chakra-ui/react';
import CardHome from '../../Components/CardHome/CardHome';
import imageBeers from '../../Images/imageHome1.jpeg';
import imageAccessories from '../../Images/imageHome2.png';
import imageFactory from '../../Images/imageHome3.jpg';
import imageContact from '../../Images/imageHome4.jpg';



const Home = () => {
  return(
    <Box pt='7rem'>
      <CardHome image={imageBeers} text='Our Beers'/>
      <CardHome image={imageAccessories} text='Accessories'/>
      <CardHome image={imageFactory} text='Our Factories'/>
      <CardHome image={imageContact} text='Conctact us'/>
    </Box>
  );
};

export default Home;