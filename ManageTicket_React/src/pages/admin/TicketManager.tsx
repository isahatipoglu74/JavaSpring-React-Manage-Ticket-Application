import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encrypt } from '../../util';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ticketcreate, userregister } from '../../service';

function TicketManager(this: any) {

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

                navigate('/adminhome');
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
                minHeight: '90vh',
                background:'#D2E0FB'
                //backgroundColor:'#546CC2'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '50%',
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
                        <label><b>Konu</b></label>
                        <input value={subject}  required onChange={(evt) => setSubject(evt.target.value)} className='form-control custom-select' />
                    </div>
            
                    <div className='mb-3 mt-3'>
                            <label className='m-1'>
                            <b>Atanan Operatör</b>
                        <select value={solutionProvider} style={{width:300}} required onChange={(evt) => setsolutionProvider(evt.target.value)}  className='form-control custom-select' >
                            <option value="Operator">Seçiniz ↓</option>
                            <option value="isa.hatipoglu">isa.hatipoglu</option>
                            <option value="selman.ulu">selman.ulu</option>
                            <option value="fehim.gursel">fehim.gursel</option>
                            <option value="Bahadir.dedeoglu">Bahadir.dedeoglu</option>
                            <option value="hamdi.dogan">hamdi.dogan</option>
                        </select>
                        </label>
                        <label>
                         
                         <b>Yöneticinizi Seçiniz</b>
                        <select value={departmantManager} style={{width:300}} onChange={(evt) => setdepartmantManager(evt.target.value)}  className='form-control custom-select' >
                            <option value="Yöneticiniz" className='custom-select'>Seçiniz ↓</option>
                            <option value="ismail.Mert">İsmail.Mert</option>
                            <option value="Muzaffer.Kaya">Muzaffer.Kaya</option>
                            <option value="Osman.Eroglu">Osman.Eroglu</option>
                        </select>
                        </label>
                    </div> 
                    
                    <div className='mb-3 mt-3'>
                            <label className='m-1'>
                        <b>Ticket Kategori</b>
                        <select value={tickedType} style={{width:300}}  onChange={(evt) => settickedType(evt.target.value)}  className='form-control' >
                            <option value="" style={{fontStyle:'italic'}}>Seçiniz ↓</option>
                            <option value="Lan">Lan</option>
                            <option value="Wan">Wan</option>
                            <option value="Sistem">Sistem</option>
                            <option value="Firewall">Firewall</option>
                        </select>
                        </label>
                        <label>
                        
                        <b>Ticket Durumu</b>
                        <select value={statusType} style={{width:300}} onChange={(evt) => setStatusType(evt.target.value)}  className='form-control' >
                            <option value="">Seçiniz ↓</option>
                            <option value="Açık">Açık</option>
                            <option value="Kapandı">Kapandı</option>
                            <option value="Beklemede">Beklemede</option>
                            <option value="Devam Ediyor">Devam Ediyor</option>
                        </select>
                        </label>
                    </div> 
                  
                    <div className='mb-3 mt-3'>
      <label><b>Destek Talebi Detaylı Açıklama</b></label>
      <textarea
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
        className='form-control'
        style={{ height: '100px' }} // İlk yüklenen yükseklik
      />
    </div>
                    <button
                        style={{
                            width: '100%',
                            fontSize: '18px',
                            backgroundColor: '#0033C7',
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

export default TicketManager;
