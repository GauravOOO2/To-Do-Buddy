import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../utils/userSlice'
import LogOut from './LogOut'
import Login from './Login'
const ShowLogoutButton = () => {

    // const user = useSelector(selectUser)

    return (
        <div>
            {/* {user ? <LogOut /> : <Login />} */}
        </div>
    )
}

export default ShowLogoutButton