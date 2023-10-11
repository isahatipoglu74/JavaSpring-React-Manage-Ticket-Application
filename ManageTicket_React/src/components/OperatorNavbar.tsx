
import React, { useEffect } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

import { IOperator } from '../models/IOperator';

interface NavbarOperatorProps {
  operator: IOperator
}

function NavbarOperator() {

   
  return (
    <>
      
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#91C8E4',borderRadius:7}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home"><h2>Operator Navbar</h2></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to='/home'><b>Dashboard</b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={'/categoryManager'}className="nav-link" ><b>Category Manager</b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={'/productManager'}className="nav-link" ><b>Product Manager</b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to={'/adminhome'}className="nav-link" ><b>Order List</b></NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <b>Settings</b>
                </a>
                <ul className="dropdown-menu" style={{backgroundColor:"#fbb040"}}>
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item"   role='button'><b>Çıkış Yap</b></a></li>
                </ul>
              </li>
              <li className="nav-item">
              
              <a className="nav-link ">Merhaba <i><b></b></i></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarOperator