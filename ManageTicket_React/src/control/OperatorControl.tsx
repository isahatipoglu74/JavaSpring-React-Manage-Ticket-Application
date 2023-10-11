import React from 'react'
import { Navigate } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import OperatorNavbar from '../components/OperatorNavbar'

function OperatorControl( props: {item: JSX.Element} ) {
  
  const stSession = sessionStorage.getItem('operator')
    
  return (
    <>
     { stSession === null 
     ?
     <Navigate to='/operator' replace />
     :
     <>
        <OperatorNavbar />
        {props.item}
     </>
     }
    </>
  )
}

export default OperatorControl