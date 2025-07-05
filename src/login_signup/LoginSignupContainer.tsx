import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import PostSignupPrompt from '@/components/PostSignupPrompt';

interface Props {
  onLoginSuccess: () => void;
}

const LoginSignupContainer: React.FC<Props> = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleSignupComplete = () => {
    setShowPrompt(true);
    setIsLogin(false);
  };

  const handlePromptSelection = (option: 'rent' | 'list') => {
    console.log('User selected:', option);
    setShowPrompt(false);
    onLoginSuccess(); // Proceed to main app
  };

  return (
    <>
      {showPrompt ? (
        <PostSignupPrompt onSelect={handlePromptSelection} />
      ) : isLogin ? (
        <Login
          onSwitchToSignup={() => setIsLogin(false)}
          onLoginSuccess={onLoginSuccess}
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
