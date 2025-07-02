import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

interface Props {
  onLoginSuccess: () => void;
}

const LoginSignupContainer: React.FC<Props> = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <Login
      onSwitchToSignup={() => setIsLogin(false)}
      onLoginSuccess={onLoginSuccess}
    />
  ) : (
    <Signup onSwitchToLogin={() => setIsLogin(true)} />
  );
};

export default LoginSignupContainer;
