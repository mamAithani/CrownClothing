import { useContext } from 'react';
import './checkout-item.styles.scss';
import {CartContext} from '../../contexts/cart.context.js';

const CheckOutItem = ({checkOutItem})=>{
    const {addItemToCart,clearItemFromCart,removeItemToCart} = useContext(CartContext);
    const {name, price, quantity, imageUrl} = checkOutItem;

    const addItemHandler = () => addItemToCart(checkOutItem);
    const removeItemHandler = () => removeItemToCart(checkOutItem);
    const clearItemHandler = () => clearItemFromCart(checkOutItem)

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                {quantity}
            <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            {/* <div className='remove-button' onClick={removeCheckOutItem(checkOutItem)}>&#10005;</div> */}
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>            
        </div>
    )
}

export default CheckOutItem;