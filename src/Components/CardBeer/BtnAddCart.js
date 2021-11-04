import React from 'react';
import { Button} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cartSlice';

const BtnAddCart = ({quantity, beer}) => {
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(cartActions.addItemToCart(
      {
        id: beer.id,
        beer,
        quantity
      }
    ));
  };

  return (
    <Button 
      _hover={{backgroundColor: 'transparent'}} 
      variant='outline' fontSize='1.35rem'
      onClick={addCartHandler}
    >
          ADD TO CART
    </Button>
  );
};

export default BtnAddCart;
