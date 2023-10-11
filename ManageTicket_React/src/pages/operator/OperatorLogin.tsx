import React, { FormEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { adminlogin, operatorlogin } from '../../service';



function OperatorLogin() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const sendForm = (evt: FormEvent) => {
      evt.preventDefault();
      setError('');

      operatorlogin(email, password)
          .then((res) => {
              const stData = JSON.stringify(res.data);
              sessionStorage.setItem('operator',stData);
              navigate('/operatorhome');
          })
          .catch((err) => {
              console.log(err.message);
              setError('Hatalı E-posta veya Parola');
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
                 
                <b>IT Destek Masası</b> Operator Giriş Sayfası <br/>    
                </h6>
                {/* Diğer formları buraya ekleyin */}
                <img
                    src='https://assets.weforum.org/organization/image/56GOutm_7dsvOrhuddSwcBQZXaCmdj5w5e0cPQ25tVo.jpg' // Resmin yolunu buraya ekleyin
                    alt='Login'
                    style={{ width: '100%', height: 'auto', margin: '0 auto', maxHeight: '250px' }}
                />
                <form onSubmit={sendForm}>
                    <div className='mb-3 mt-3'>
                    <label>E-posta </label>
                        <input
                            value={email}
                            required
                            onChange={(evt) => setEmail(evt.target.value)}
                            className='form-control'
                            placeholder='Username'
                        />
                    </div>
                    <div className='mb-3'>
                    <label>Parola</label>
                        <input
                            value={password}
                            required
                            type='password'
                            onChange={(evt) => setPassword(evt.target.value)}
                            className='form-control'
                            placeholder='Password'
                        />
                    </div>
                    {error && <div className='alert alert-danger'>{error}</div>}
                    <button
                        style={{
                            width: '100%',
                            fontSize: '18px',
                            backgroundColor: '#4942E4',
                            border: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            color: 'white',
                            cursor: 'pointer',
                            marginBottom: '15px',
                        }}
                    >
                        Giriş Yap
                    </button>
                </form>
                
            </div>
        </div>
    );
}

export default OperatorLogin
