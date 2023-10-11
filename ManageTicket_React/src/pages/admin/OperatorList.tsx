import React, { useEffect, useState } from 'react'

import { Operator, Result } from '../../models/Operator';
import { operatorlist } from '../../service';

import { NavLink } from 'react-router-dom';



function OperatorList() {

    const [arr, setArr] = useState<Result[]>([]);

    useEffect(() => {
        operatorlist().then( res => {
            setArr(res.data.result);
        }).catch( err => {
    
        })
      }, [])
    

  return (
    <>
      
      <div className='row mt-3' style={{margin:10 }}>
      <h4>Operator Hesaplar</h4>
        <div className='col-sm-12'>
          <table className="table table-striped  table-hover">
            <thead className='table-primary'>
              <tr>
                <th scope="col">Sıra</th>
                <th scope="col">Email</th>
                <th scope="col">İsim</th>
                <th scope="col">Soyisim</th>
                <th scope="col">Açıklama</th>
                <th scope="col">Detay</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.description}</td>
                  <td><NavLink to={'/operatordetail/' + item.oid} className='btn btn-primary'>
                              Detay
                          </NavLink></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
    </>
  )
}

export default OperatorList