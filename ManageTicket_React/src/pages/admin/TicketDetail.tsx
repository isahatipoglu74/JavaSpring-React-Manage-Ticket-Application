
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { singleTicket,  ticketcreate, ticketlist } from '../../service'
import { ITicket, Result } from '../../models/ITicket'

function TicketDetail() {

    const navigate = useNavigate()
    const params = useParams()
    const tid = params.tid


     
    const [item, setItem] =useState<Result>()
   
      useEffect(() => {
        if (tid) {
            singleTicket(tid).then( res => {
                setItem(res.data.result)
                console.log(res.data.result)
            }).catch(err => {
                //alert(err.message)
                navigate('/adminhome')
            })
        }
       }, [])
       
    
      return (
        <>
       
            <div className='row mt-4'>
            <div className='col-3'></div>
                <div className='col-6'>
                 <table className="table table-striped-columns" style={{backgroundColor:'#548CFF'}}>
  <thead>
  </thead>
  <tbody>
    
  <tr> 
  
      <th scope="row"></th>
      <h5  style={{textAlign:'left', backgroundColor:'#548CFF'}}>Ticket Detayları</h5>
    </tr>
    <tr >
      <th scope="row"></th>
      <td>Başlık :</td>
      <td>{item?.subject}</td>
     
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Açıklama :</td>
      <td>{item?.description}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Atanan Kişi :</td>
      <td>{item?.solutionProvider}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Talep Eden Kişi :</td>
      <td>{item?.requester}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Yöneticisi :</td>
      <td>{item?.departmantManager}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Durumu :</td>
      <td>{item?.statusType}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Kategori :</td>
      <td>{item?.tickedType}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Oluşturulma Tarihi :</td>
      <td>{item?.createDate ? item?.createDate.toString() : 'Tarih bilgisi yok'}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Arıza Konusu :</td>
      <td>{item?.tickedType}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td><NavLink to={'/Adminhome' } className='btn btn-warning' style={{width:200, height:40,textAlign:'center'}}>Sekmeyi Kapat</NavLink></td>
    </tr>
      
    
  </tbody>
                </table> 
                
                <div className='col-2'></div>  
                </div>
                <div className='col-3'></div>
            </div>
       
        
        </>
       )
}
 
    
export default TicketDetail