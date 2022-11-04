import {createContext, useEffect, useState}  from 'react';
import {onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';
//import {signOutUser } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
         currentUser: null 
        ,setCurrentUser: () => null 
});

//Functional Component wapped    around the app     
export const UserProvider = ({ children } ) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    //signOutUser();
    //console.log('sign out user');
    //console.log (currentUser);

    useEffect( () => {
       const unsubscribe=  onAuthStateChangedListener( (user) => {
             console.log('On auth State changed listener');
             setCurrentUser(user);           
             console.log( currentUser )
             if (user){ 
               createUserDocumentFromAuth(user);
             } 
            // console.log('created doc from auth');
            return unsubscribe; //unmount when you un subscribe .
        })
    });
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}   