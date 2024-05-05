import React from 'react'
import '../style/style.css'

const Login = () => {
  return (
    <div className='loginContainer' >
        <h3> Welcome Back</h3>
        
        <div className='userNameDiv' >
            <label >Username</label>
        <input type='text'  />
        </div>
        <div className='passwordDiv' >
            <label> Password</label>
            <input type='password' />
        </div>
        <div className='loginButtonDiv' >
            <button >Login</button>
        </div>
    </div>
  )
}

export default Login