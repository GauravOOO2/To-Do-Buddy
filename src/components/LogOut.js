import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { logOut } from '../utils/userSlice';

const LogOut = () => {

    const dispatch = useDispatch()

    const handleLogout = (e) =>{
        e.preventDefault();

        
        dispatch(logOut())

    }
  return (
    <div>
        <Link to={'/'} > 
        <button onClick={(e)=>handleLogout(e)} >
            LogOut
            </button>
         </Link>
    </div>
  )
}

export default LogOut