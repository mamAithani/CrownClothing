import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils.js';

const Navigation = ()  => {

    console.log( 'render navigation ');
    const {currentUser, setCurrentUser} = useContext(UserContext);

    const signOutUserHandler = async() => {
            const response = await signOutUser();
            console.log( response );
            setCurrentUser(null);
    }

    console.log( currentUser);
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
                     
                    </div>            
                  
                </div>    
                <Outlet/>
            </div>
        )     
};
    
export default Navigation;