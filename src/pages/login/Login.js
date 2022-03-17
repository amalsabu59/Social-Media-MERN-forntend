import './login.css'
import { useContext, useRef } from "react"
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext'
import { LoadingButton } from '@mui/lab';
import { useHistory } from 'react-router-dom';
function Login() {

    const email = useRef();
    const password = useRef();
    const history = useHistory()

    const {user,isFetching,error,dispatch} = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault()
        loginCall({email:email.current.value,password:password.current.value,},dispatch)
    }
    console.log(user);
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">HelloClub</h3>
                <span className="loginDesc">Connect With World</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick} >
                    <input placeholder='Email' type='email' required className="loginInputt" ref={email} />
                    <input placeholder='Password' type='password' required  className="loginInputt" ref={password} />
                    <button className="loginButton" type='submitt' disabled={isFetching}>{isFetching ? <LoadingButton /> : "login"}</button>
                    <span className="LoginForgot">Forgot Password</span>
                    <button className='loginReg' onClick={() => history.push('/') }>{isFetching ? "loading" : "Create an Account"}</button>

                </form>
            </div>
        </div>

    </div>
  )
}

export default Login