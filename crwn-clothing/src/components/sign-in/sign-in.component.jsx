import { useContext, useState } from 'react';
import {signInWithGooglePopUp,signIn} from '../../utils/firebase/firebase.utils.js' 
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js'; 
import FormInput from '../form-input/form-input.component.jsx';
import './sign-in.styles.scss'
import Button from '../button/button.component.jsx';
import { UserContext } from '../../contexts/user.context.js';

const defaultFields= {
     email:''
    ,password:''    
};
const SignIn = () => {

    console.log( 'render sign in  ');
    const [formFields, setFormFields] = useState(defaultFields);
    const {email, password}= formFields; 
    const {setCurrentUser} = useContext(UserContext);

    const onSubmitHandler = async(event) =>{
        event.preventDefault();
        const {user} = await signIn(formFields.email, formFields.password);

        setCurrentUser( user );

        console.log('sign in success the user.');   
    }

    const loginWithGoogle = async () => {
         const {user}  = await signInWithGooglePopUp();
         const userdocRef = await createUserDocumentFromAuth( user);
         //console.log( userdocRef);
    }

    const onChangeHandler = (event) => {
      const {name, value} =  event.target;    
      setFormFields({...formFields, [name]: value}); 
      //console.log( formFields);
    }

    return (
        <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={onSubmitHandler}>
            <FormInput label="Email" type="text" name="email" value={email} required onChange={onChangeHandler}/>
            <FormInput label="password" type="passsword" name="password" value={password} required onChange={onChangeHandler}/>
           
            {/* <button> SignIn </button>              
            <button type="submit" > SignIn with Google </button>  */}

            <div className='buttons-container'>
             <Button type='submit'>Sign In</Button>
             <Button onClick={loginWithGoogle}  buttonType='google' type="submit">Google Sign In</Button>
            </div>
        </form>
        </div>
    );
}


export default SignIn;