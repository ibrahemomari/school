import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    navigate('/form');
  };

  const handleAdminClick = () => {
    setShowModal(true); // Show the modal when admin button is clicked
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(''); // Clear the error message on password change
  };

  const handlePasswordSubmit = () => {
    const adminPassword = 'Ibrahem22111996@'; // Hardcoded password

    if (password === adminPassword) {
      setShowModal(false); // Close the modal
      navigate('/admin'); // Navigate to the admin page
    } else {
      setError('كلمة المرور غير صحيحة'); // Show error message if password is incorrect
    }
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
        style={{ position: 'absolute', left: '16px', bottom: '16px' }}
        onClick={handleAdminClick}
      >
        Admin
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">أدخل كلمة المرور</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="password"
                  className="form-control"
                  placeholder="كلمة المرور"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  إلغاء
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePasswordSubmit}
                >
                  تأكيد
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
