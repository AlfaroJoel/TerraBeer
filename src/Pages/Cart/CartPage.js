import React, { useEffect } from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {BsCurrencyDollar} from 'react-icons/bs';
import { useMercadopago } from 'react-sdk-mercadopago';
import CartCardBeer from '../../Components/CartCardBeer/CartCardBeer';
import mplogo from '../../Images/mercadopago-logo.png';
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
          container: '.cho-container',
          label: 'MercadoPago',
        }
      });
    }
  }, [mercadopago]);

  return (
    <Box pt='8rem' textAlign='center' pb='20vh'>
      {totalQuantity > 0 ? (
        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
          {itemsCart.map(item => {
            return (<CartCardBeer key={item.id} item={item}/>);
          })}
          <Box position='fixed' bottom='0' backgroundColor='#fff' width='100%' pl='2rem'>
            <Text fontSize='1.8rem' display='flex' alignItems='center'>
              Total  
              <Box as={BsCurrencyDollar} fontSize='1.5rem' mb='5px' ml='10px'/>
              {totalPrice.toFixed(2)}
            </Text>
            <Box mb='10px'>
              <div className="cho-container"/>
            </Box>
          </Box>
        </Box>
      ):
        <Text>No tienes nada</Text>}
    </Box>
  );
};

export default CartPage;
