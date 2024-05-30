// pages/signup.js
import { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';
import Link from 'next/link';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const response = await fetch('/api/check-username', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    if (data.exists) {
      setIsUsernameTaken(true);
      return;
    }

    const usersResponse = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (usersResponse.ok) {
      sessionStorage.setItem('user', username);
      Router.push('/dashboard');
    } else {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="container min-vh-100">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSignup} id='Sign-up-form' className="mt-5">
              <h1 className="text-center mb-4">Sign Up</h1>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {isUsernameTaken && <p className="text-danger">Username is taken. Choose another one.</p>}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" required />
                <label className="form-check-label">
                  I agree to the privacy policy
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
              <p className="mt-3 text-center">
                Already have an account? <Link href="/login">Log In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
