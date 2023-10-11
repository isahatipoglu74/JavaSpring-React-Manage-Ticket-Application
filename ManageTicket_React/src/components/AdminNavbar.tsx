
import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IAdmin } from '../models/IAdmin';
import { adminlist, operatorlist } from '../service';



function NavbarAdmin(item: {admin:IAdmin} ) {

  interface NavbarAdminProps {
    admin: IAdmin
  }
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('admin')
    navigate('/admin')
  }

  return (
    <>
      
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#82ACFF'}}>
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/adminhome"><h4><img src="https://s3-symbol-logo.tradingview.com/ihlas-holding--600.png" style={{width:60, height:60}} alt="" /></h4></NavLink>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to='/adminhome'><h4>Ticket Yönetim Paneli</h4></NavLink>
              </li>
              <li className="nav-item hover-effect" style={{marginLeft:90,borderRadius:10
            
            }} >
                <NavLink className="nav-link" to='/adminhome'><b>Tüm İş Kayıtları</b></NavLink>
              </li>
              <li className="nav-item hover-effect" style={{borderRadius:10}}>
                <NavLink  to={'/TicketManager'}className="nav-link" ><b>Kayıt Aç</b></NavLink>
              </li>
           
             
              <li className="nav-item hover-effect" style={{borderRadius:10}}>
                <NavLink  to={'/ticketrapor'}className="nav-link" ><b>Raporlar</b></NavLink>
              </li>
              <li className="nav-item dropdown hover-effect" style={{borderRadius:10}} >
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  > 
            <b>Kullanıcılar</b>
          </a>
          <ul className="dropdown-menu" style={{backgroundColor:'#82ACFF'}} >
          <NavLink  to={'/adminlist'}className="nav-link hover-effect" ><b>Admin listesi</b></NavLink>
          <NavLink  to={'/operatorlist'}className="nav-link hover-effect" ><b>Operator listesi</b></NavLink>
          <NavLink  to={'/userlist'}className="nav-link hover-effect" ><b>User listesi</b></NavLink>
          </ul>
        </li>
              
              <li className="nav-item dropdown hover-effect" style={{borderRadius:10}}>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  > 
            <b>Ayarlar</b>
          </a>
          <ul className="dropdown-menu" style={{backgroundColor:'#82ACFF'}}>
            <li><a className="dropdown-item hover-effect" href="#" onClick={logout} style={{ }} >Hesap Ayarları</a></li>
            <li><a className="dropdown-item hover-effect" href="#" onClick={logout} style={{}} >Çıkış Yap</a></li>
          </ul>
        </li>
              <li className="nav-item ">
              <a className="nav-link " style={{marginLeft:30}}><i>Hoşgeldin <b>{ item.admin && item.admin.name} </b></i></a>
              </li>
           
             
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              
            </form>
          </div>
        </div>
      </nav>
      <script src=''/>

    </>
  )
}

export default NavbarAdmin