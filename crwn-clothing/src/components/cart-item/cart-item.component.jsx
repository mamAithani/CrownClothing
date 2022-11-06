import './cart-item.styles.scss';

export const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price, key} = cartItem;
    return(
        <div className='cart-item-container' key={key}>
            <img src={imageUrl} alt={name} /> 
            <div className='item-details' key={key}>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} * ${price} </span>
            </div>          
        </div>
    );

}
    
export default CartItem;