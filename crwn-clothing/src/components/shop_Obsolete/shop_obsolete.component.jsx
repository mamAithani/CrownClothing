import { useContext } from 'react'; 
import { CategoriesContext } from '../../contexts/categories.context';
import './shop.styles.scss';
import CategoriesPreview from '../category-preview/category-preview.component'; 

const Shop = () => {
    const {categoriesMap}  = useContext(CategoriesContext);
    //console.log("categoriesMaps")
   // console.log(Object.keys(categoriesMap));
    return(
     <div className='shop-container'>
     {
        Object.keys(categoriesMap).map((title) => 
            (
                <CategoriesPreview title={title} products={categoriesMap[title]} key={title} />    
            ) 
        )
     } 
      </div>
    );
}
export default Shop; 