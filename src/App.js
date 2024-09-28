import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import StudentsParentIdsForm from './pages/StudentsParentIdsForm/StudentsParentIdsForm';
import Admin from './pages/Admin/Admin';
import StudentParentInfo from './pages/StudentParentInfo/StudentParentInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/form" element={<StudentsParentIdsForm />} />
        <Route path="/StudentParentInfo" element={<StudentParentInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
