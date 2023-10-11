
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import pages

import UserHome from './pages/user/UserHome';
import UserLogin from './pages/user/UserLogin';
import AdminControl from './control/AdminControl';
import UserRegister from './pages/user/UserRegister';
import AdminLogin from './pages/admin/AdminLogin';
import AdminHome from './pages/admin/AdminHome';
import OperatorLogin from './pages/operator/OperatorLogin';
import OperatorHome from './pages/operator/OperatorHome';
import OperatorControl from './control/OperatorControl';
import UserControl from './control/UserControl';
import TicketManager from './pages/admin/TicketManager';
import TicketDetail from './pages/admin/TicketDetail';
import Welcome from './pages/welcome';
import AdminList from './pages/admin/AdminList';
import AdminDetail from './pages/admin/AdminDetail';
import TicketUpdate from './pages/admin/TicketUpdate';
import TicketRapor from './pages/admin/TicketRapor';
import OperatorList from './pages/admin/OperatorList';
import UserList from './pages/admin/Userlist';
import OperatorDetail from './pages/admin/OperatorDetail';
import UserDetail from './pages/admin/UserDetail';





const router =
<BrowserRouter>  
<ToastContainer/>
<Routes>

    <Route path='/' element={<Welcome /> }/> 
    <Route path='/user' element={<UserLogin /> }/> 
    <Route path='/userregister' element={<UserRegister /> }/>  
    <Route path='/admin' element={<AdminLogin /> }/> 
    <Route path='/operator' element={<OperatorLogin /> }/> 

    <Route path='/adminhome' element={<AdminControl item={<AdminHome/> }/> }/>
    <Route path='/adminlist' element={<AdminControl item={<AdminList/> }/> }/>
    <Route path='/detail/:tid'  element={<AdminControl item={<TicketDetail/> }/> }/>
    <Route path='/admindetail/:aid'  element={<AdminControl item={<AdminDetail/> }/> }/>
    <Route path='/operatordetail/:oid'  element={<AdminControl item={<OperatorDetail/> }/> }/>
    <Route path='/userdetail/:uid'  element={<AdminControl item={<UserDetail/> }/> }/>
    <Route path='/ticketmanager' element={<AdminControl item={<TicketManager/> }/> }/>
    <Route path='/ticketrapor' element={<AdminControl item={<TicketRapor/> }/> }/>
    <Route path='/ticketupdate/:tid' element={<AdminControl item={<TicketUpdate/> }/> }/>
    <Route path='/operatorlist' element={<AdminControl item={<OperatorList/> }/> }/>
    <Route path='/userlist' element={<AdminControl item={<UserList/> }/> }/>
   

    <Route path='/operatorhome' element={<OperatorControl item={<OperatorHome/> }/> }/>
    <Route path='/userhome' element={<UserControl item={<UserHome/> }/> }/>
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(router);

