import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../LogoEmpresa/correos.png';
import './centerImage.css';

function Home() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
        <div className='center-image'>
            <img src={logo} />
        </div>
    </div>
  );
}

export default Home;