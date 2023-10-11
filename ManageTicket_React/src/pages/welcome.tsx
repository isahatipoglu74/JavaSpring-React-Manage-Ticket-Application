import React from 'react';
import { NavLink } from 'react-router-dom';

function welcome() {
  const buttonStyle = {
    width: '30%',
    height: '120px',
    fontSize: '28px',
    margin: '10px', // '10px' olarak düzeltildi
    backgroundColor: '#4942E4',
    border: 'none',
    padding: '10px',
    borderRadius: '25px',
    textAlign: 'center' as 'center', // 'textAlign' özelliği düzeltiliyor
    color: 'white',
    cursor: 'pointer',
    marginBottom: '15px',
    paddingTop: '30px', // '40px' olarak düzeltildi
    transition: 'transform 0.2s',
  };

  const onButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const onButtonLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div className='container' >
      <div className='row' >
        <div className='col-12 mt-5'>
          <h2 style={{ textAlign: 'center',color:'#3C5186' }}>IT Destek Masasına Hoşgeldiniz</h2>
          <img
            className='mt-4'
            src="https://www.ihlasgayrimenkul.com/wp-content/uploads/2016/06/ihlas-holding.jpg"
            style={{ width: '60%', height: '270px', marginLeft: '20%', borderRadius:10 }}
            alt=""
          />
          <div style={{ marginTop: '7%' }}>
            <NavLink
              to={'/admin'}
              style={buttonStyle}
              className='btn btn-primary'
              onMouseEnter={onButtonHover}
              onMouseLeave={onButtonLeave}
            >
              Admin Panel
            </NavLink>
            <NavLink
              to={'/operator'}
              style={{ ...buttonStyle, backgroundColor: '#088395' }}
              className='btn btn-info'
              onMouseEnter={onButtonHover}
              onMouseLeave={onButtonLeave}
            >
              Teknisyen Panel
            </NavLink>
            <NavLink
              to={'/user'}
              style={{ ...buttonStyle, backgroundColor: '#EBB02D' }}
              className='btn btn-warning'
              onMouseEnter={onButtonHover}
              onMouseLeave={onButtonLeave}
            >
              Çalışan Panel
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default welcome;
