import { CartItemContainer, ItemDetails } from "./cart-item.styles";

export const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price, key} = cartItem;
    return(
        <CartItemContainer key={key}>
            <img src={imageUrl} alt={name} /> 
            <ItemDetails key={key}>
                <span>{name}</span>
                <span>{quantity} * ${price} </span>
            </ItemDetails>          
        </CartItemContainer>
    );

}
    
export default CartItem;