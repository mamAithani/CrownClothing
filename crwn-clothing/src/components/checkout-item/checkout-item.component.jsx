import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context.js';
import { CheckOutItemContainer
    ,ImageContainer
    ,RemoveButton
    ,Value
    ,Quantity
    ,BaseSpan
    ,Arrow
 } from './checkout-item.styles';

const CheckOutItem = ({checkOutItem})=>{
    const {addItemToCart,clearItemFromCart,removeItemToCart} = useContext(CartContext);
    const {name, price, quantity, imageUrl} = checkOutItem;

    const addItemHandler = () => addItemToCart(checkOutItem);
    const removeItemHandler = () => removeItemToCart(checkOutItem);
    const clearItemHandler = () => clearItemFromCart(checkOutItem)

    return(
        <CheckOutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                 <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                 <Value> {quantity}</Value> 
                <Arrow className='arrow' onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan className='price'>{price}</BaseSpan>
            {/* <div className='remove-button' onClick={removeCheckOutItem(checkOutItem)}>&#10005;</div> */}
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>            
        </CheckOutItemContainer>
    )
}

export default CheckOutItem;