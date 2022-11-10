import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import { ProductCardContainer , Footer, Price, Name} from './product-card.styles'

const ProductCard = ({product}) => {

    const {addItemToCart} = useContext(CartContext); 
    const addProductToCart = () => addItemToCart(product);

    const {name, price, imageUrl } = product; 
    return(
       <ProductCardContainer key={product.id}>
            <img src={imageUrl} alt= {`${name}`}/>
            <Footer>
                <Name> {name} </Name>
                <Price> {price} </Price>               
            </Footer>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
       </ProductCardContainer>
    );
};


export default ProductCard; 