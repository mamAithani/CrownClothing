import CategoryItem from "../category-item/category.component";
import './directory.styles.scss'

const Directory = (props) => {
    const { categories }  = props;
    return (
            <div className="directory-container">
                { 
                    categories.map((category) => (                       
                       <CategoryItem category={category} key={category.id}/>
                    ))
                }
            </div>
    );
};

export default Directory;