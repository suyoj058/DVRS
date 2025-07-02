// import React, { useState } from 'react';

// const styles = {
//   container: {
//     backgroundColor: '#0c1019',
//     color: '#ffffff',
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//   },
//   box: {
//     backgroundColor: '#1a1f2b',
//     padding: '2rem',
//     borderRadius: '12px',
//     width: '100%',
//     maxWidth: '400px',
//     boxShadow: '0 0 10px rgba(0,0,0,0.5)',
//   },
//   title: {
//     color: '#f97217',
//     fontSize: '1.8rem',
//     marginBottom: '1.2rem',
//     textAlign: 'center' as const,
//   },
//   input: {
//     width: '100%',
//     padding: '0.7rem',
//     marginBottom: '1rem',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '1rem',
//     backgroundColor: '#2c3343',
//     color: '#ffffff',
//   },
//   button: {
//     width: '100%',
//     padding: '0.7rem',
//     backgroundColor: '#f97217',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//   },
//   switchText: {
//     marginTop: '1rem',
//     textAlign: 'center' as const,
//     color: '#ffffff',
//   },
//   link: {
//     color: '#f97217',
//     cursor: 'pointer',
//     textDecoration: 'underline',
//     marginLeft: '4px',
//   },
// };

// interface LoginProps {
//   onSwitchToSignup: () => void;
// }

// const Login: React.FC<LoginProps> = ({ onSwitchToSignup }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Login:', { username, password });
//     // Add your login logic here
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.box}>
//         <h2 style={styles.title}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             style={styles.input}
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             required
//           />
//           <input
//             style={styles.input}
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             required
//           />
//           <button style={styles.button} type="submit">
//             Login
//           </button>
//         </form>
//         <div style={styles.switchText}>
//           New user?
//           <span style={styles.link} onClick={onSwitchToSignup}>
//             Sign up
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


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
    borderRadius: 12,
    width: '100%',
    maxWidth: 400,
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
    borderRadius: 6,
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
    borderRadius: 6,
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
    marginLeft: 4,
  },
  errorMsg: {
    color: '#ff4d4f',
    marginTop: '0.5rem',
    fontWeight: 'bold' as const,
    textAlign: 'center' as const,
  },
};

interface LoginProps {
  onSwitchToSignup: () => void;
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToSignup, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === '11' && password === '11') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            autoFocus
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
            Login
          </button>
          {error && <p style={styles.errorMsg}>{error}</p>}
        </form>
        <div style={styles.switchText}>
          New user?
          <span style={styles.link} onClick={onSwitchToSignup}>
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
