import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import {Routes, Route} from 'react-router-dom'; 
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

const App = () => {   
    return (
        <Routes>
               <Route path='/' element={ <Navigation/>}>
                    <Route index element={ <Home/>}>
                    </Route>

                     <Route path='/Shop/*' element={ <Shop/>}>
                     </Route>   

                
                     <Route path='/CheckOut' element={ <CheckOut/>}>
                     </Route>     

                     <Route path='/Authentication' element={ <Authentication/>}>
                     </Route>     
               </Route>               
        </Routes> 
    )
}   

export default App;