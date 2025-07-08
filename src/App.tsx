import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Index from './pages/Index';
import RentNow from './pages/RentNow';
import VehicleDetailsForm from './pages/VehicleDetailsForm';
import LoginSignupContainer from './login_signup/LoginSignupContainer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* ✅ Public route: Homepage */}
        <Route path="/" element={<Index onLogout={() => setIsAuthenticated(false)} />} />

        {/* ✅ Public route: Login/Signup */}
        <Route
          path="/login"
          element={
            <LoginSignupContainer
              onLoginSuccess={() => setIsAuthenticated(true)}
            />
          }
        />

        {/* 🔐 Protected: Only accessible when authenticated */}
        {isAuthenticated && (
          <>
            <Route path="/rent-now" element={<RentNow />} />
            <Route path="/list-vehicle" element={<VehicleDetailsForm />} />
          </>
        )}

        {/* Redirect any unknown route to homepage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
