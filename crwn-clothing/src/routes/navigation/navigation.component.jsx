import { Outlet } from 'react-router-dom';
import { NavigationContainer
        ,LogoContainer
        ,NavLinks
        ,NavLink    } from './navigation.styles';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext ,Fragment} from 'react';
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
            <Fragment>
                <NavigationContainer>
                <LogoContainer to='/'>
                     <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUserHandler}>
                        SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/Authentication'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                    </NavLinks>
                    {isCartOpen && <CartDropdown />}
                </NavigationContainer>
                <Outlet/> 
            </Fragment> 
        )     
};
    
export default Navigation;