import {useContext} from 'react';
import {CartContext } from '../../contexts/cart.context';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { CheckOutContainer, CheckOutHeader, HeaderBlock, Total } from './checkout.styles';

const CheckOut = () => {
    const {cartItems, cartTotal} = useContext(CartContext); 
    return(
        <CheckOutContainer>
        <CheckOutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span> 
            </HeaderBlock>
        </CheckOutHeader>
        {
            cartItems.map((cartItem) => <CheckOutItem checkOutItem={cartItem} key={cartItem.id}/> )
        }
        <Total>Total: ${cartTotal} </Total>
        </CheckOutContainer>         
    );    
}

export default CheckOut; 