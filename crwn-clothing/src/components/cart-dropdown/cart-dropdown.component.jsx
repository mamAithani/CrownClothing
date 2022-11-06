import './cart-dropdown.styles.scss';
import {CartContext } from '../../contexts/cart.context';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();  
    
    const goToCheckOutHandler = () => {
        navigate('/CheckOut');
    };
    return(
        <div className="cart-dropdown-container">
            <div className='cart-items'>
            { 
                cartItems.map((cartItem)=>{
                    return <CartItem cartItem={cartItem} key={cartItem.id}/>
                })
            }               
            </div>
            <Button onClick={goToCheckOutHandler}>Go To Checkout</Button>
        </div>
    );
}   

export default CartDropdown;    