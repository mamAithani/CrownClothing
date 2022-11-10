import { useState } from 'react';

//import { useContext, useState } from 'react';
import { signInWithGooglePopUp, signIn } from '../../utils/firebase/firebase.utils.js' 
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js'; 
import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';
import {SignUpContainer, ButtonsContainer} from './sign-in.styles'

const defaultFields= {
     email:''
    ,password:''    
};
const SignIn = () => {
    console.log( 'render sign in  ');
   
    const [formFields, setFormFields] = useState(defaultFields);
    const {email, password}= formFields; 
    //const {setCurrentUser} = useContext(UserContext);

    const onSubmitHandler = async(event) =>{
        event.preventDefault();
        await signIn(formFields.email, formFields.password);
        //setCurrentUser( user );

        //console.log('sign in success the user.');   
    }

    const loginWithGoogle = async () => {
         const {user}  = await signInWithGooglePopUp();
         await createUserDocumentFromAuth(user);
         //console.log( userdocRef);
    }

    const onChangeHandler = (event) => {
      const {name, value} =  event.target;    
      setFormFields({...formFields, [name]: value}); 
      //console.log( formFields);
    }

    return (
        <SignUpContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={onSubmitHandler}>
            <FormInput label="Email" type="text" name="email" value={email} required onChange={onChangeHandler}/>
            <FormInput label="password" type="passsword" name="password" value={password} required onChange={onChangeHandler}/>
           
            {/* <button> SignIn </button>              
            <button type="submit" > SignIn with Google </button>  */}

            <ButtonsContainer>
             <Button type='submit'>Sign In</Button>
             <Button onClick={loginWithGoogle}  buttonType='google' type="submit">Google Sign In</Button>
            </ButtonsContainer>
        </form>
        </SignUpContainer>
    );
}


export default SignIn;