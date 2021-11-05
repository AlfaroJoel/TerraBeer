import React from 'react';
import { Box } from '@chakra-ui/react';
import CardHome from '../../Components/CardHome/CardHome';
import { Link } from 'react-router-dom';
import imageBeers from '../../Images/imageHome1.jpeg';
import imageFactory from '../../Images/imageHome3.jpg';
import imageContact from '../../Images/imageHome4.jpg';



const Home = () => {
  return(
    <Box pt={{base:'6.5rem', sm: '71px'}}>
      <Link to='/beers'><CardHome image={imageBeers} text='Our Beers'/></Link>
      <Box display={{base: 'block', sm: 'flex'}}>
        <Link to='/factories'><CardHome image={imageFactory} text='Our Factory' bottom/></Link>
        <Link to='/contact'><CardHome image={imageContact} text='Conctact us' bottom/></Link>
      </Box>
    </Box>
  );
};

export default Home;