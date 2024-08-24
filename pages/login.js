import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../components/Layout';

const Login = () => {
  const [username, setUsername] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(true); // Initially assuming user exists
  const [passwordCorrect, setPasswordCorrect] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleUsernameCheck = async () => {
    const response = await fetch('/api/check-username', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    setUserExists(data.exists);
    if (data.exists) {
      setShowPasswordInput(true);
    } else {
      setErrorMessage('Sorry, the account doesn&apos;t exist. Please check the username.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userExists) {
      return; // No need to proceed if the user doesn't exist
    }
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      sessionStorage.setItem('user', username);
      Router.push('/dashboard'); // Redirect to dashboard upon successful login
    } else {
      setPasswordCorrect(false);
      setErrorMessage('Sorry, the password is incorrect. Please try again.');
    }
  };

  return (
    <Layout>
    <div className="container mt-200  max-vh-100 " id='log-div'>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleLogin}>
            <h1 className="mb-4">Log In</h1>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={handleUsernameCheck}
                required
              />
              {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
            </div>
            {userExists && showPasswordInput && (
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {!passwordCorrect && <p className="text-danger mt-2">Incorrect password. Please try again.</p>}
              </div>
            )}
            {!showPasswordInput && (
              <button type="button" id='continue-btn'  className="btn btn-primary mb-3" onClick={handleUsernameCheck}>Continue</button>
            )}
            {showPasswordInput && (
              <button type="submit" className="btn btn-primary mb-3">Log In</button>
            )}
            <p>
              Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Login;
