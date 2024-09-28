import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentsParentIdsForm = () => {
  const [parentName, setParentName] = useState('');
  const [parentId, setParentId] = useState('');
  const [error, setError] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parentId.length !== 10) {
      setError('الرقم الوطني يجب أن يكون 10 أرقام');
      return;
    }

    const data = {
      parentName,
      parentId,
    };

    try {
      const response = await axios.post(
        'https://x8ki-letl-twmt.n7.xano.io/api:YwBN1GhQ/studentsinfo',
        {
          student_name: parentName,
          st_parent_name: parentName,
          st_parent_id: parentId,
        },
        {
          headers: {
            'x-apikey': 'ccb095ee78485701c934104f91ae4e76337a4',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Data submitted:', response.data);
      setError(''); // Clear error message on successful submission
      setShowDialog(true); // Show success dialog
      setTimeout(() => {
        setShowDialog(false);
        navigate('/'); // Navigate back to home page after 2 seconds
      }, 2000);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className='container mt-5'>
      <h2>معلومات ولي الأمر</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>اسم الطالب </label>
          <input
            type='text'
            className='form-control'
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'> الرقم الوطني لولي أمر الطالب</label>
          <input
            type='number'
            className='form-control'
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
            required
          />
          {error && <div className='text-danger mt-2'>{error}</div>}
        </div>
        <button type='submit' className='btn btn-success'>
          ارسال
        </button>
      </form>

      {showDialog && (
        <div className='alert alert-success mt-3' role='alert'>
          تم إرسال البيانات بنجاح!
        </div>
      )}
    </div>
  );
};

export default StudentsParentIdsForm;
