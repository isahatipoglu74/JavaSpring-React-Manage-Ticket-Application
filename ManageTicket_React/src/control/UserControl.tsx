import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import UserNavbar from '../components/UserNavbar'
import { IUser } from '../models/IUser'

function UserControl( props: {item: JSX.Element} ) {
  const navigate = useNavigate();
  const stSession = sessionStorage.getItem('user')
  let user:IUser

  if (stSession !== null) {
    try {
      user = JSON.parse(stSession) as IUser;
    } catch (error) {
      sessionStorage.removeItem("user");
      navigate("/user");
    }
  }
    
  return (
    <>
     { stSession === null 
     ?
     <Navigate to='/user' replace />
     :
     <>
        <UserNavbar user={user!} />
        {props.item}
     </>
     }
    </>
  )
}

export default UserControl