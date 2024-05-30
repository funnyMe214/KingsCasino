// components/SignOutButton.js
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <li className="nav-item mx-2">
      <button onClick={handleSignOut} className="nav-link btn btn-link">Sign out</button>
    </li>
  );
};

export default SignOutButton;
