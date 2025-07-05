import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginSignupContainer from "./login_signup/LoginSignupContainer";
import Index from "./pages/Index";
import RentNow from "./pages/RentNow";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {!isAuthenticated ? (
        // Show login/signup until user authenticates
        <LoginSignupContainer onLoginSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <Routes>
          {/* Home page with logout */}
          <Route
            path="/"
            element={<Index onLogout={() => setIsAuthenticated(false)} />}
          />
          {/* Rent Now page */}
          <Route path="/rent-now" element={<RentNow />} />
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
