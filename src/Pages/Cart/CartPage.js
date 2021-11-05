import React, { useEffect } from 'react';
import { Box, Text, Image, Button} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {BsCurrencyDollar} from 'react-icons/bs';
import { useMercadopago } from 'react-sdk-mercadopago';
import {FaGooglePay} from 'react-icons/fa';
import {BsPaypal} from 'react-icons/bs';
import CartCardBeer from '../../Components/CartCardBeer/CartCardBeer';
const CartPage = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const itemsCart = useSelector(state => state.cart.items);

  const mercadopago = useMercadopago.v2('TEST-b8c8ae6f-b277-4b1e-a62b-778a2679c66b', {
    locale: 'en-US'
  });

  useEffect(() => {
    if (mercadopago && totalQuantity > 0) {
      mercadopago.checkout({
        preference: {
          id: 'YOUR_PREFERENCE_ID'
        },
        render: {
          container: '.mppay',
          label: 'MercadoPago',
        }
      });
    }
  }, [mercadopago]);
  
  return (
    <Box pt={{base: '7.5rem', sm: '100px'}} textAlign='center' pb={{base: '20vh', sm: '5vh'}}>
      {totalQuantity > 0 ? (
        <Box display='flex' justifyContent='center' 
          alignItems='center' mr={{base: '0', sm: '30vw'}}
          flexDirection='column' 
        >
          {itemsCart.map(item => {
            return (<CartCardBeer key={item.id} item={item}/>);
          })}
          <Box position='fixed' bottom='0' right='0' 
            backgroundColor='#fff' height={{base: 'auto', sm: 'calc(100vh - 71px)'}}
            width={{base: '100%', sm: '30%'}} pl='2rem'
          >
            <Text fontSize='1.8rem' display='flex' alignItems='center' justifyContent='center'>
              Total  
              <Box as={BsCurrencyDollar} fontSize='1.5rem' mb='5px' ml='10px'/>
              {totalPrice.toFixed(2)}
            </Text>
            <Text display={{base: 'none', sm: 'block'}}>Pay for your beers with the payment method you want </Text>
            <Box 
              display={{base: 'block', sm: 'flex'}} 
              height='50%'
              py={{base: '1rem', sm: '3rem'}}
              flexDirection='column'
              justifyContent='space-around'
              alignItems='center'
            >
              <div className="mppay" />
              <Button width='135px'><FaGooglePay fontSize='2rem'/></Button>
              <Button width='135px'><BsPaypal fontSize='1.7rem'/> Paypal</Button>

            </Box>
          </Box>
        </Box>
      ):
        <Text>You havent added any beer yet, go to the store and choose the one you like the most</Text>
      }
    </Box>
  );
};

export default CartPage;
