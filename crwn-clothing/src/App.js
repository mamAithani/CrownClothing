import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import {Routes, Route} from 'react-router-dom'; 

const Shop = () => {
    return (
        <h1> I am a shop component </h1>
    ) 
};


const App = () => {   
    return (
        <Routes>
               <Route path='/' element={ <Navigation/>}>
                    <Route index element={ <Home/>}>
                    </Route>

                     <Route path='/Shop' element={ <Shop/>}>
                     </Route>       
               </Route>               
        </Routes> 
    )
}   

export default App;