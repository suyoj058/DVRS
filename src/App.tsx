import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginSignupContainer from './login_signup/LoginSignupContainer';
import Index from './pages/Index';
import RentNow from './pages/RentNow';
import VehicleDetailsForm from './pages/VehicleDetailsForm';  // <-- import here

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <Route
            path="/*"
            element={<LoginSignupContainer onLoginSuccess={() => setIsAuthenticated(true)} />}
          />
        ) : (
          <>
            <Route path="/" element={<Index onLogout={() => setIsAuthenticated(false)} />} />
            <Route path="/rent-now" element={<RentNow />} />
            <Route path="/list-vehicle" element={<VehicleDetailsForm />} /> {/* <-- add route */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
