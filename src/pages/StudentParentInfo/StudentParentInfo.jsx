import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentParentInfo = () => {
  const [studentInfo, setStudentInfo] = useState([]);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(
          'https://x8ki-letl-twmt.n7.xano.io/api:YwBN1GhQ/studentsinfo',
          {
            headers: {
              'x-apikey': 'ccb095ee78485701c934104f91ae4e76337a4',
            },
          }
        );
        setStudentInfo(response.data);
      } catch (error) {
        console.error('Error fetching student info:', error);
      }
    };

    fetchStudentInfo();
  }, []);

  return (
    <div className='container mt-5'>
      <h2>Student Parent Information</h2>
      <ul className='list-group'>
        {studentInfo.map((info) => (
          <li key={info.id} className='list-group-item'>
            <strong>Parent Name:</strong> {info.st_parent_name} <br />
            <strong>Parent ID:</strong> {info.st_parent_id} <br />
            <strong>Student Name:</strong> {info.student_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentParentInfo;
