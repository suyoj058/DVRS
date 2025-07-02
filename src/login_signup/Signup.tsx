import React, { useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#0c1019',
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  box: {
    backgroundColor: '#1a1f2b',
    padding: '2rem',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  title: {
    color: '#f97217',
    fontSize: '1.8rem',
    marginBottom: '1.2rem',
    textAlign: 'center' as const,
  },
  input: {
    width: '100%',
    padding: '0.7rem',
    marginBottom: '1rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: '#2c3343',
    color: '#ffffff',
  },
  button: {
    width: '100%',
    padding: '0.7rem',
    backgroundColor: '#f97217',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  switchText: {
    marginTop: '1rem',
    textAlign: 'center' as const,
    color: '#ffffff',
  },
  link: {
    color: '#f97217',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: '4px',
  },
};

interface SignupProps {
  onSwitchToLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSwitchToLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Signup:', {
      firstName,
      lastName,
      contact,
      email,
      password,
    });

    // Redirect to login after signup
    onSwitchToLogin();
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Number"
            value={contact}
            onChange={e => setContact(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button style={styles.button} type="submit">
            Sign Up
          </button>
        </form>
        <div style={styles.switchText}>
          Already have an account?
          <span style={styles.link} onClick={onSwitchToLogin}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
