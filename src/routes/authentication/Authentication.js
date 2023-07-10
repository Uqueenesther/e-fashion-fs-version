
import SignupForm from "../../component/signup-form/SignupForm";
import SignInForm from "../../component/SignIn-Form/SignInForm";
import './auth.scss'

const Authentication = () =>{
return (

        <div className='authentication-container'>
        <SignInForm />
        <SignupForm />
        </div>
    
    )
}

export default Authentication;