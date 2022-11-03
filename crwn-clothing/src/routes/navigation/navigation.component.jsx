import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = ()  => {
    return (
            <div>
                <div className="navigation">      
                    <Link className='logo-container' to='/'>
                       <CrwnLogo className='logo' />
                    </Link>
                    <div className="nav-links-container">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/Shop'>Shop</Link>
                        <Link className='nav-link' to='/Authentication'>Sign In</Link>
                    </div>            
                  
                </div>    
                <Outlet/>
            </div>
        )     
};
    
export default Navigation;