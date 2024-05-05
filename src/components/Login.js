import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/style.css'
import LogOut from './LogOut';
import { useDispatch } from 'react-redux';
import { login } from '../utils/userSlice';

const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
            name: name,
            email: email,
            password: password,
            location: location,
            loggedIn: true,
        }
            
        ))
    }

    return (
        <div className='loginContainer' >
            <form onSubmit={(e) => handleSubmit(e)}>
            <h3> Welcome Back</h3>
            <div className='userNameDiv' >
                <label >Name</label>
                <input type='text'
                    value={name}
                    onChange={(e)=> setName(e.target.value) }
                />
            </div>

            <div className='userNameDiv' >
                <label >Email ID</label>
                <input type='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value) }
                />
            </div>
            <div className='passwordDiv' >
                <label> Password</label>
                <input type='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value) }
                />
            </div>
            <div className='locationDiv' >
                <label>Location</label>
                <input type='text'
                    value={location}
                    onChange={(e)=> setLocation(e.target.value) }

                />
            </div>
            
            <button type='submit' >Login</button>
          
            </form>
        </div>
    )
}

export default Login