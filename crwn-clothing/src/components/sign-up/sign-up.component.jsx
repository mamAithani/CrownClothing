import { Register, createUserDocumentFromAuth}  from '../../utils/firebase/firebase.utils';
import { useState } from "react";
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: ''
    ,email:''
    ,password:''
    ,confirmPassword:''
};  

const SignUp = () => {

    console.log('render sign up ');
    const [formFields, setFormFields] = useState(defaultFormFields); 
    const {displayName, email , password , confirmPassword} = formFields; 
 
    const onSubmitHandler = async (event) => {
        event.preventDefault(); //prevent refresh

        try {
            const { user } = await Register(email, password);                    
             await createUserDocumentFromAuth(user, { displayName} );            
        } 
        catch(error){
            console.log( error );
        }
    }

    const onChangeHandler = (event) =>{       
        const {value, name} = event.target;         
        setFormFields({...formFields, [name]: value} ); 
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput label="Display Name" type="text" name="displayName" required onChange={onChangeHandler} value={displayName}/>                    
                <FormInput label="Email" type="text" name="email" required onChange={onChangeHandler} value={email}/>                    
                <FormInput label="Password" type="passsword" name="password" required onChange={onChangeHandler} value={password}/>
                <FormInput label="Confirm Password" type="passsword" name="confirmPassword" required onChange={onChangeHandler} value={confirmPassword}/>
                <Button type="submit" children='Sign Up'/>
            </form> 
        </div>
    )

}   

export default SignUp;