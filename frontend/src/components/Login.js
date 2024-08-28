import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = isSignup ? 'http://localhost:5000/api/auth/signup' : 'http://localhost:5000/api/auth/login';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(isSignup ? 'Sign up successful!' : 'Login successful!');
          Navigate('/dashboard'); // Redirect to the dashboard
        } else {
          alert(data.message || (isSignup ? 'Sign up failed' : 'Invalid credentials'));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-container">
      <h2>{ isSignup ? 'Sign Up' : 'Login' }</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isSignup? 'Sign up' : 'Login' }</button>
      </form>
      <div>
        <button className='toggle-btn' onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Already have an account? Login': "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default Login;
