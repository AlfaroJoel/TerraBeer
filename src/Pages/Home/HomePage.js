import React from 'react';
import { Box } from '@chakra-ui/react';
import CardHome from '../../Components/CardHome/CardHome';
import { Link } from 'react-router-dom';
import imageBeers from '../../Images/imageHome1.jpeg';
import imageAccessories from '../../Images/imageHome2.png';
import imageFactory from '../../Images/imageHome3.jpg';
import imageContact from '../../Images/imageHome4.jpg';



const Home = () => {
  return(
    <Box pt='7.5rem'>
      <Link to='/beers'><CardHome image={imageBeers} text='Our Beers' /></Link>
      <Link to='/factories'><CardHome image={imageFactory} text='Our Factories'/></Link>
      <Link to='/contact'><CardHome image={imageContact} text='Conctact us'/></Link>
    </Box>
  );
};

export default Home;