import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };
  const handleAdminClick = () => {
    navigate('/admin');
  };

  return (
    <>
      <div className='container text-center'>
        <br />
        <h1>الأستاذ أبراهيم العمري </h1>
        <br />
        <h1>مرحبا أيها الطالب </h1>
        <button className='btn btn-primary mt-3' onClick={handleClick}>
          مطلوب - الرقم الوطني لولي الامر
        </button>
      </div>
      <button
        className='btn btn-primary mt-3'
        style={{ position: 'absolute', left: '16px', button: '16px' }}
        onClick={handleAdminClick}>
        Admin
      </button>
    </>
  );
};

export default Home;
