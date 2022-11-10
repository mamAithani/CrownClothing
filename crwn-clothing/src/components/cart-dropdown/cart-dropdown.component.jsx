import {CartContext } from '../../contexts/cart.context';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component';
import {CartDropDownContainer, CartItems}  from './cart-dropdown.styles'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();  
    
    const goToCheckOutHandler = () => {
        navigate('/CheckOut');
    };
    return(
        <CartDropDownContainer>
            <CartItems>
            { 
                cartItems.map((cartItem)=>{
                    return <CartItem cartItem={cartItem} key={cartItem.id}/>
                })
            }               
            </CartItems>
            <Button onClick={goToCheckOutHandler}>Go To Checkout</Button>
        </CartDropDownContainer>
    );
}   

export default CartDropdown;    