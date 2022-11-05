import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import {Routes, Route} from 'react-router-dom'; 
import Shop from './components/shop/shop.component';


const App = () => {   
    return (
        <Routes>
               <Route path='/' element={ <Navigation/>}>
                    <Route index element={ <Home/>}>
                    </Route>

                     <Route path='/Shop' element={ <Shop/>}>
                     </Route>     

                     <Route path='/Authentication' element={ <Authentication/>}>
                     </Route>     
               </Route>               
        </Routes> 
    )
}   

export default App;