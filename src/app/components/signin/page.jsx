import React, { useState } from 'react';
import { FaUtensils } from 'react-icons/fa';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Add your sign-in logic here
    console.log('Signing in...');
  };

  return (
    <div style={{ backgroundColor: 'white', color: 'black', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '300px', textAlign: 'center' }}>
        <h1>
          <FaUtensils size={40} style={{ marginBottom: '10px' }} />
          Recipe Central
        </h1>
        <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px' }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '20px', padding: '8px' }}
          />
          <br />
          <button type="submit" style={{ backgroundColor: 'black', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
