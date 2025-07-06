import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import PostSignupPrompt from '@/components/PostSignupPrompt';

interface Props {
  onLoginSuccess: () => void;
}

const LoginSignupContainer: React.FC<Props> = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const navigate = useNavigate();

  const handleSignupComplete = () => {
    setShowPrompt(true);
    setIsLogin(false);
  };

  const handlePromptSelection = (role: 'renter' | 'lister') => {
    setShowPrompt(false);
    onLoginSuccess();
    if (role === 'renter') {
      navigate('/');  // Navigate to homepage for renter
    } else {
      navigate('/list-vehicle');  // Navigate to VehicleDetailsForm for lister
    }
  };

  return (
    <>
      {showPrompt ? (
        <PostSignupPrompt onSelect={handlePromptSelection} />
      ) : isLogin ? (
        <Login
          onSwitchToSignup={() => setIsLogin(false)}
          onLoginSuccess={() => {
            onLoginSuccess();
            navigate('/');
          }}
        />
      ) : (
        <Signup
          onSwitchToLogin={() => setIsLogin(true)}
          onSignupComplete={handleSignupComplete}
        />
      )}
    </>
  );
};

export default LoginSignupContainer;
