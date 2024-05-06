import React from 'react'
import ToDoList from '../components/ToDoList'
import ShowLogoutButton from '../components/ShowLogoutButton'
import WhetherData from '../components/WhetherData'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Body = () => {
  const user = useSelector((store)=>store.user.user)
  return (
    <div>
      {
         user
        ? 
        <>
        <WhetherData />
        <ToDoList />
        </>
        : <>
        <p className='ErrorP' >You have not logged In. Please <Link to={'/'}> Login </Link></p>
        </>
      }        
    </div>
  )
}

export default Body