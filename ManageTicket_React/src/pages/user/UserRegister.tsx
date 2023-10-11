import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encrypt } from '../../util';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userregister } from '../../service';

function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const sendFormRegister = (evt: FormEvent) => {
        evt.preventDefault();

        userregister(email, password, name, surname,title,description)
            .then((res) => {
                const stData = JSON.stringify(res.data);
                sessionStorage.setItem('user', stData);
                console.log(res.data);

                toast.success('Kaydınız başarılı bir şekilde gerçekleştirilmiştir.Giriş Yapabilirsiniz.', { //toastify ile kullanıcıya bilgi verilmesini sağlar.
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                });

                navigate('/');
            })
            .catch((err: { message: any }) => {
                console.log(err.message);
                alert('Invalid Email or Password'); //alert:form içinde uyarı verilmesi sağlar 
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
                Daha önceden hesabınız yoksa formu doldurarak sisteme giriş yapabilirsiniz.
                </h6>
                
                <img
                    src='https://www.ihlasyapi.com.tr/assets/images/tamamlananproje/slide/ihlas-1.jpg' // Resmin yolunu buraya ekleyin
                    alt='Login'
                    style={{ width: '100%', height: 'auto', margin: '0 auto', maxHeight: '250px' }}
                />
                <form onSubmit={sendFormRegister}>
                    <div className='mb-1 mt-1'>
                        <label>Email</label>
                        <input value={email} required onChange={(evt) => setEmail(evt.target.value)} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label>Password</label>
                        <input value={password} type='password' required onChange={(evt) => setPassword(evt.target.value)} className='form-control' />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label>Name</label>
                        <input value={name} required onChange={(evt) => setName(evt.target.value)}  className='form-control' />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label>Surname</label>
                        <input value={surname} required  onChange={(evt) => setSurname(evt.target.value)} className='form-control'  />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label>Title</label>
                        <input value={title}   onChange={(evt) => setTitle(evt.target.value)} className='form-control'  />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label>Description</label>
                        <input value={description}  onChange={(evt) => setDescription(evt.target.value)} className='form-control'  />
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
                        Kayıt Ol
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
