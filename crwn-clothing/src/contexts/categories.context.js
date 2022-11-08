import {createContext, useEffect, useState}  from 'react';
//import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'; 

export const CategoriesContext = createContext( {
     categoriesMap: []
    ,setCategoriesMap: () => null 
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState([]); 

    // useEffect(() => {
    //     //console.log(SHOP_DATA);
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []); 

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments();           
            //console.log( categoryMap );
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []); 

    const value = {categoriesMap, setCategoriesMap};  
    return (
         <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );    
};

    