import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddPetPage from './pages/AddPetPage';
import AppointmentPage from './pages/AppointmentPage';
import VaccinationPage from './pages/VaccinationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/vaccination" element={<VaccinationPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
