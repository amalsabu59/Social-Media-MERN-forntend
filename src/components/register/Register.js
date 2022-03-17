import axios from 'axios';
import { useRef } from 'react';
import './register.css'
import {useHistory} from 'react-router-dom'
import { formHelperTextClasses } from '@mui/material';



function Register() {
    
    const username = useRef();
    const email = useRef();
    const password = useRef();
    // const city = useRef();
    // const from = useRef();

    const passwordAgain = useRef();
    const history = useHistory()

    const handleClick = async (e) => {
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("passwords don't match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                // city: city.current.value,
                // from:from.current.value

            }
            try{
                await axios.post("/auth/register", user)
                history.push("/login")
            }catch(err){
                console.log(err)
            }
        }
        
    }

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">HelloClub</h3>
                <span className="loginDesc">Connect With World</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick} >
                <input placeholder='Name' required ref={username} className="loginInput" />
                    <input placeholder='Email' required ref={email} type="email" className="loginInput" />
                    <input placeholder='Password' required ref={password} type="password" className="loginInput" />
                    <input placeholder='Re enter Password' required ref={passwordAgain} type="password" className="loginInput" />
                    {/* <input placeholder='City' required ref={city} className="loginInput" />
                    <input placeholder='State' required ref={from} className="loginInput" /> */}
                    <button className="loginButton"  type='submit' >SignUp</button>
                    <span className="LoginForgot">Forgot Password</span>
                    <button className='loginReg' onClick={() => history.push('/login') }>Already Have an Acoount</button>

                </form>
            </div>
        </div>

    </div>
  )
}

export default Register