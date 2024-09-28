import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleStudentParentInfoClick = () => {
    navigate('/StudentParentInfo');
  };

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <button className="btn btn-primary" onClick={handleStudentParentInfoClick}>
        Student Parents Info
      </button>
    </div>
  );
};

export default Admin;
