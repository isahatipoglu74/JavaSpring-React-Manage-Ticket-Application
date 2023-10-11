import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { User, Result } from '../../models/User'
import { singleUser } from '../../service'


function UserDetail() {

    const navigate = useNavigate()
    const params = useParams()
    const uid = params.uid

    const [item, setItem] = useState<Result>()


   useEffect(() => {
    if (uid) {
        singleUser(uid).then((res) => {
            setItem(res.data.result); // Veriyi doğru şekilde almak için .result[0] kullanın
           
          }).catch((err) => {
            // Hata yönetimi
            navigate('/adminhome');
          });
    }
   }, [])

  return (
    <>  
 {item && (
  <>
 
   
    <div className='row mt-5'>
            <div className='col-3'></div>
                <div className='col-6'>
                 <table className="table table-striped-columns" style={{backgroundColor:'#548CFF'}}>
  <thead>
  </thead>
  <tbody>
    
  <tr> 
  
      <th scope="row"></th>
      <h5  style={{textAlign:'left', backgroundColor:'#548CFF'}}>User Kullanıcı Detayları</h5>
    </tr>
    <tr >
      <th scope="row"></th>
      <td>İsim :</td>
      <td>{item?.name}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Soyisim :</td>
      <td>{item?.surname }</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Email Adres :</td>
      <td>{item?.email}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Title :</td>
      <td>{item?.title}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Açıklama</td>
      <td>{item?.description}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Hesap Durumu</td>
      <td>{item?.status}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td><NavLink to={'/Userlist' } className='btn btn-warning' style={{width:200, height:40,textAlign:'center'}}>Pencereyi Kapat</NavLink></td>
    </tr>
      
    
  </tbody>
                </table> 
                
                <div className='col-2'></div>  
                </div>
                <div className='col-3'></div>
            </div>
    
  </>
)}
 
        
    </>

  )
}

export default UserDetail