
import React, { useEffect } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { IUser } from '../models/IUser';

interface NavbarUserProps {
  user: IUser
}

function NavbarUser(props: NavbarUserProps) {

    const navigate =useNavigate()

    useEffect(() => {
        if ( props.user ) {
            
            navigate('/userhome')
        }else {
          navigate('/')
        }
      }, [])
  
   
  return (
    <>
      
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#91C8E4',borderRadius:7}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home"><h2>User Navbar</h2></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:7}}>
              <li className="nav-item">
                <NavLink className="nav-link" to='/userhome'><b>Dashboard</b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={'/userhome'}className="nav-link" ><b>Kayıt Oluştur </b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={'/userhome'}className="nav-link" ><b> Ticket List </b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={'/userhome'}className="nav-link" ><b>Profil Güncelle</b></NavLink>
              </li>
              
              <li className="nav-item">
              
              <a className="nav-link " style={{marginLeft:15}}>Hoşgeldiniz {props.user && props.user.name} {props.user && props.user.surname} <i></i></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Ara</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarUser