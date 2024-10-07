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

  console.log('🚀 ~ filteredStudentInfo ~ studentInfo:', studentInfo)
  // Filter out duplicates based on st_parent_id
  const uniqueParents = [];
  const filteredStudentInfo = studentInfo.filter((info) => {
    if (!uniqueParents.includes(info.st_parent_id)) {
      uniqueParents.push(info.st_parent_id);
      return true; // Keep the record if it's not a duplicate
    }
    return false; // Filter out duplicates
  });

  // Sort by created_at date (descending order)
  const sortedStudentInfo = filteredStudentInfo.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at); // For descending order
    // return new Date(a.created_at) - new Date(b.created_at); // For ascending order
  });

  return (
    <div className='container mt-5'>
      <h2>Student Parent Information</h2>
      <ul className='list-group'>
        {sortedStudentInfo.map((info, key) => (
          <li key={info.id} className='list-group-item'>
            {key + 1} <br />
            <strong>Parent Name:</strong> {info.st_parent_name} <br />
            <strong>Parent ID:</strong> {info.st_parent_id} <br />
            <strong>Student Name:</strong> {info.student_name} <br />
            <strong>Created At:</strong> {new Date(info.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentParentInfo;
