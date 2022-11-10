import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import {CategoryContainer, Title} from './category.styles';

const Category = () =>{ 

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);  
    const products = categoriesMap[category];
    //console.log (categoriesMap[category]); 
    return(
        <Fragment>
        <Title>{category.toUpperCase()}</Title>
        <CategoryContainer>{          
            products && products.map((product) => 
            (
             <ProductCard title={product.title} key={product.id} product={product} />
            ))
        }
        </CategoryContainer>
        </Fragment>
    );

}

export default Category;