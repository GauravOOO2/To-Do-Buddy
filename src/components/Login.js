import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/style.css'
import LogOut from './LogOut';
import { useDispatch } from 'react-redux';
import { login } from '../utils/userSlice';

const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate();

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
        navigate('/Body')
    }
       


    return (
        <div className='loginContainer' >
              <div className='headingContainer' >
                <h3> Welcome Back</h3>
                </div>
            <div className='formParent' >
            <form 
            className='formContainer' 
            onSubmit={(e) => handleSubmit(e)}>
          
                <label >Name</label>
                <input type='text'
                    value={name}
                    onChange={(e)=> setName(e.target.value) }
                />
            

                <label >Email ID</label>
                <input type='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value) }
                />
                <label> Password</label>
                <input type='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value) }
                />
                <label>Location</label>
                <input type='text'
                    value={location}
                    onChange={(e)=> setLocation(e.target.value) }

                />
            
            <button type='submit' >Login</button>
          
            </form>
            </div>
        </div>
    )
}

export default Login