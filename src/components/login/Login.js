import './login.css'

function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">HelloClub</h3>
                <span className="loginDesc">Connect With World</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className="LoginForgot">Forgot Password</span>
                    <button className='loginReg'>Create An Account</button>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Login