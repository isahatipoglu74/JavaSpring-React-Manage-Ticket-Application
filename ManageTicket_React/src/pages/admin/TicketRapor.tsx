import React, { useEffect, useState } from 'react';
import { ticketlist } from '../../service';
import { Result } from '../../models/ITicket';
import { NavLink } from 'react-router-dom';


function TicketRapor() {
  const [arr, setArr] = useState<Result[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
 

  useEffect(() => {
    ticketlist()
      .then((res) => {
        const sortedData = res.data.result.sort((a, b) => {
          const dateA = new Date(a.createDate);
          const dateB = new Date(b.createDate);
          if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
            return 0;
          } else {
            return dateB.getTime() - dateA.getTime();
          }
        });
        setArr(sortedData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  
 

  // Sayfada gösterilecek verileri hesaplayın
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);



  // Sayfa numaralarını hesaplayın
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(arr.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

 

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number} className={currentPage === number ? 'active' : ''}>
      <button style={{backgroundColor:'#82ACFF',borderRadius:2}} onClick={() => setCurrentPage(number)}>{number}</button>
    </li>
  ));

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToLastPage = () => {
    setCurrentPage(pageNumbers.length);
  };


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
               
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
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
                   
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ul className="pagination" style={{margin:7 }}>
        <li>
          <button onClick={goToFirstPage} style={{backgroundColor:'#82ACFF',borderRadius:2}}>First</button>
        </li>
        <li>
          <button onClick={goToPreviousPage}style={{backgroundColor:'#82ACFF',borderRadius:2}} >Previous</button>
        </li>
        {renderPageNumbers }
        <li>
          <button onClick={goToNextPage} style={{backgroundColor:'#82ACFF',borderRadius:2}}>Next</button>
        </li>
        <li>
          <button onClick={goToLastPage} style={{backgroundColor:'#82ACFF',borderRadius:2}}>Last</button>
        </li>
      </ul>
   
    </>
  );
}

export default TicketRapor;
