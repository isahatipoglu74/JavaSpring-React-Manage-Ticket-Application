import React, { FormEvent, useEffect, useState } from 'react';
import { singleTicket, updateTicket } from '../../service';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { Result } from '../../models/ITicket';

function TicketUpdate() {
  const navigate = useNavigate();
  const params = useParams();
  const tid = params.tid;

  const [item, setItem] = useState<Result>();
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [solutionProvider, setSolutionProvider] = useState('');
  const [departmantManager, setDepartmantManager] = useState('');
  const [statusType, setStatusType] = useState('');
  const [tickedType, setTickedType] = useState('');
  const [createDate, setCreateDate] = useState('');

  useEffect(() => {
    if (tid) {
      singleTicket(tid)
        .then((res) => {
          setItem(res.data.result);
          setSubject(res.data.result.subject);
          setDescription(res.data.result.description);
          setSolutionProvider(res.data.result.solutionProvider);
          setDepartmantManager(res.data.result.departmantManager);
          setStatusType(res.data.result.statusType);
          setTickedType(res.data.result.tickedType);
          setCreateDate(res.data.result.createDate);
        })
        .catch((err) => {
          navigate('/adminhome');
        });
    }
  }, [tid, navigate]);

  const sendFormTicketUpdate = (evt: FormEvent) => {
    evt.preventDefault();

    updateTicket(tid ?? '', subject, solutionProvider, departmantManager, tickedType, statusType, description, createDate)
      .then((res) => {
        toast.success('Kayıt başarıyla güncellendi.', );
        navigate('/adminhome')
      })
      .catch((err) => {
        console.error(err.message);
        alert('Bir hata oluştu.');
      });
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-6 mt-3'>
            <form onSubmit={sendFormTicketUpdate}>
              <div className='mb-3 mt-2'>
                <label style={{color:'white'}}>Konu</label>
                <input value={subject} required onChange={(evt) => setSubject(evt.target.value)} className='form-control mt-2' />
              </div>
              <div className='mb-3'>
                <label style={{color:'white'}}>Atanan Teknisyen</label>
                <input value={solutionProvider} required onChange={(evt) => setSolutionProvider(evt.target.value)} className='form-control mt-2' />
              </div>
              <div className='mb-3 mt-3'>
                <label style={{color:'white'}}>Departman Yöneticisi</label>
                <input value={departmantManager} required onChange={(evt) => setDepartmantManager(evt.target.value)} className='form-control mt-2' />
              </div>
              <div className='mb-3 mt-3'>
                <label style={{color:'white'}}>Kayıt Türü</label>
                <input value={tickedType} required onChange={(evt) => setTickedType(evt.target.value)} className='form-control mt-2' />
              </div>
              <div className='mb-3 mt-3'>
                <label style={{color:'white'}}>Kayıt Durumu</label>
                <input value={statusType} onChange={(evt) => setStatusType(evt.target.value)} className='form-control mt-2 ' />
              </div>
              <div className='mb-3 mt-3'>
                <label style={{color:'white'}} >Detaylı Açıklama</label>
                <input value={description} onChange={(evt)  => setDescription(evt.target.value)} className='form-control mt-2' />
              </div>
              <button
                style={{
                  width: '30%',
                  fontSize: '18px',
                  backgroundColor: '#FFC23C',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '5px',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  textAlign: 'center',
                  
                  
                }}
              >
                Güncelle
              </button>
            </form>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </>
  );
}

export default TicketUpdate;
