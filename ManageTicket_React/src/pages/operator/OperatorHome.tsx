import React, { useEffect, useState } from 'react';
import { ticketlist,ticketlistoperator } from '../../service';
import { Result } from '../../models/ITicket';
import { NavLink } from 'react-router-dom';

function OperatorHome() {
  const [arr, setArr] = useState<Result[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
 

  
  

 

 

  return (
    <>
      
      <div className='row mt-3'  style={{margin:1 }}>
        <div className='col-sm-12 table-responsive'>
          <table className="table table-striped table-hover align-middle" >
            <thead className='table-primary' >
              <tr>
                <th scope="col">Sıra</th>
                <th scope="col">Başlık</th>
                <th scope="col">Açıklama</th>
                <th scope="col">Atanan Kişi</th>
                <th scope="col">Yöneticisi</th>
                <th scope="col">Durumu</th>
                <th scope="col">Kategori</th>
                <th scope="col">Oluşturulma Tarihi</th>
                <th scope="col">İşlemler</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {arr.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.subject}</td>
                  <td>{item.description}</td>
                  <td>{item.solutionProvider}</td>
                  <td>{item.departmantManager}</td>
                  <td>{item.statusType}</td>
                  <td>{item.tickedType}</td>
                  <td>{item.createDate ? item.createDate.toString() : 'Tarih bilgisi yok'}</td>
                   {/* eğer tarih  bilgisi varsa göster yoksa bilgi notu göster */}
                   <td><NavLink to={'/detail/' + item.tid} className='btn btn-primary btn-sm'>
                              Detaylar
                          </NavLink></td>
                   <td><NavLink to={'/ticketupdate/' + item.tid} className='btn btn-success btn-sm'>
                              Güncelle
                          </NavLink></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
    </>
  );
}

export default OperatorHome;
