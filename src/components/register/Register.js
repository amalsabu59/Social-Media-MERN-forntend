import { useRef } from 'react';
import './register.css'

function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();



  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">HelloClub</h3>
                <span className="loginDesc">Connect With World</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder='Name' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='Re enter Password' className="loginInput" />
                    <button className="loginButton">SignUp</button>
                    <span className="LoginForgot">Forgot Password</span>
                    <button className='loginReg'>Already Have an Acoount</button>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Register