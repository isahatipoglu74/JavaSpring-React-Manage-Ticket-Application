import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import { IAdmin } from '../models/IAdmin'

function AdminControl( props: {item: JSX.Element} ) {
  
  const navigate = useNavigate()
  const stSession = sessionStorage.getItem('admin')
   
  var admin:IAdmin
  if ( stSession !== null ) {
    try {
     
      admin = JSON.parse(stSession) as IAdmin
    } catch (error) {
      sessionStorage.removeItem('admin')
      navigate('/')
    }
  return (
    <>
     { stSession === null 
     ?
     <Navigate to='/' replace />
     :
     <>
        <AdminNavbar admin={admin!} />
        {props.item}
     </>
     }
    </>
  )
}
}
export default AdminControl