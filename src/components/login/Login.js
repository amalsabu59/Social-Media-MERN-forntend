import './login.css'
import { useRef } from "react"
function Login() {
    const email = useRef();
    const password =useRef();
    const handleClick = (e) => {
        e.preventDefault()
        console.log(email.current.value);
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
                    <input placeholder='Email' type='email' required className="loginInput" ref={email} />
                    <input placeholder='Password' type='password' required  className="loginInput" ref={password} />
                    <button className="loginButton">Login</button>
                    <span className="LoginForgot">Forgot Password</span>
                    <button className='loginReg'>Create An Account</button>

                </form>
            </div>
        </div>

    </div>
  )
}

export default Login