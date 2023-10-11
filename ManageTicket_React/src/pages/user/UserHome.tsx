import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encrypt } from '../../util';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ticketcreate, userregister } from '../../service';

function UserHome() {

    const navigate = useNavigate();

    const [subject, setSubject] = useState('');
    const [requesting, setRequesting] = useState('');
    const [relatedPerson, setRelatedPerson] = useState('');
    const [createDate, setCreateDate] = useState('');
    const [description, setDescription] = useState('');
    const [solutionProvider, setsolutionProvider] = useState('');
    const [departmantManager, setdepartmantManager] = useState('');
    const [tickedType, settickedType] = useState('');
    const [statusType, setStatusType] = useState('');
    const handleDescriptionChange = (evt: { target: { value: React.SetStateAction<string>; }; }) => {
      setDescription(evt.target.value); //yazı yazdıkça metnin kutusunun boyutunu büyütmesini sağlar
    };

    const sendFormTicket = (evt: FormEvent) => {
        evt.preventDefault();

        ticketcreate(subject,solutionProvider,departmantManager,tickedType,statusType, description,createDate)
        .then((res) => {
                const stData = JSON.stringify(res.data);
                sessionStorage.setItem('user', stData);
                console.log(res.data);

                toast.success('Kaydınız başarılı bir şekilde gerçekleştirilmiştir.Yöneticiniz onay verdikten sonra en kısa sürede sizinle irtibata geçeceğiz.', { //toastify ile kullanıcıya bilgi verilmesini sağlar.
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                });

                navigate('/userhome');
            })
            .catch((err: { message: any }) => {
                console.log(err.message);
                alert('Destek Kaydınız Oluşturulamadı'); //alert:form içinde uyarı verilmesi sağlar 
            });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f0f0f0',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                }}
            >

                <h6 className='login-title' style={{ textAlign: 'center' }}>
                Destek Talebi Oluşturun
                </h6>
                
                
                <form onSubmit={sendFormTicket}>
                    <div className='mb-1 mt-1'>
                        <label>Konu</label>
                        <input value={subject} required onChange={(evt) => setSubject(evt.target.value)} className='form-control' />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label>Yöneticiniz</label>
                        <input value={relatedPerson} required onChange={(evt) => setRelatedPerson(evt.target.value)}  className='form-control' />
                    </div>
                 
                    <div className='mb-3 mt-3'>
      <label>Destek Detaylı Açıklama</label>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        className='form-control'
        style={{ height: '100px' }} // İlk yüklenen yükseklik
      />
    </div>
                    <button
                        style={{
                            width: '100%',
                            fontSize: '18px',
                            backgroundColor: '#1450A3',
                            border: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                        }}
                    >
                        Kayıt Aç
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserHome;
