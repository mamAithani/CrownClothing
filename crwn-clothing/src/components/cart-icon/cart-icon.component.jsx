import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; 
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { useContext } from 'react';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} =  useContext(CartContext); 
    const toggleIsCartOpen = () =>  setIsCartOpen(!isCartOpen);
    const {cartCount} = useContext(CartContext);

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon; 
