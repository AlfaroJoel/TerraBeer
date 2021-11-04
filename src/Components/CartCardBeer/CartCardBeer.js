import React, { useState } from 'react';
import { Image, Box, Text, HStack, Button, Input } from '@chakra-ui/react';
import {BsPlusLg, BsDashLg, BsCurrencyDollar} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cartSlice';

const CartCardBeer = ({item}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const addBeerHandler = () => {
    if(quantity < 12){
      setQuantity(quantity + 1);
      dispatch(cartActions.addItemToCart({
        id: item.id,
        beer: item.beer,
        quantity: 1
      }));
    }
  };

  const deleteBeerHandler = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
    setQuantity(quantity - 1);
  };

  return (
    <Box width='95%' display='flex' my='.7rem' textAlign='center' border='1px solid #888' borderRadius='15px'>
      <Image src={item.beer.image} boxSize='27%' objectFit='cover'/>
      <Box width='100%' textAlign='center' display='flex' flexDirection='column' alignItems='center'>
        <Text fontSize='1.8rem'>{item.beer.name}</Text>
        <HStack maxW="180px" maxH='30px' my='1rem'>
          <Button 
            _hover={{backgroundColor: 'transparent'}}
            variant='outline'
            onClick={deleteBeerHandler}
          >
            <BsDashLg fontSize='3rem'/>
          </Button>
          <Input textAlign='center' fontSize='2rem' type='number' value={quantity} readOnly/>
          <Button
            _hover={{backgroundColor: 'transparent'}}
            variant='outline'
            onClick={addBeerHandler}
          >
            <BsPlusLg fontSize='3rem'/>
          </Button>
        </HStack>
        <Text fontSize='1.8rem' display='flex' alignItems='center'><BsCurrencyDollar fontSize='1.3rem'/>{item.priceActual.toFixed(2)}</Text>
      </Box>
    </Box>
  );
};

export default CartCardBeer;
