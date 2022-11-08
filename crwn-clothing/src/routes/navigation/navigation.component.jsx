import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = ()  => {

    console.log('render navigation');
    const {currentUser} = useContext(UserContext); 
    const {isCartOpen} = useContext(CartContext); 

    //console.log( isCartOpen); 
   
    const signOutUserHandler = async() => {
        await signOutUser();          
    }

    //console.log( currentUser);
    return (
            <div>
                <div className="navigation">      
                    <Link className='logo-container' to='/'>
                       <CrwnLogo className='logo' />
                    </Link>
                    <div className="nav-links-container">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/Shop'>Shop</Link>
                        { 
                            currentUser ? (
                                <Link className='nav-link' onClick={signOutUserHandler}>Sign Out</Link>

                            ) : (
                                <Link className='nav-link' to='/Authentication'>Sign In</Link>
                            )                        
                        }
                         <CartIcon/>
                    </div>  
                   { isCartOpen && <CartDropdown/>  }                        
                </div>    
                <Outlet/>
            </div>
        )     
};
    
export default Navigation;