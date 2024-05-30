// components/LoginButton.js
import Link from 'next/link';

const LoginButton = () => (
  <li className="nav-item mx-2">
    <Link href="/login" className="nav-link">Log In</Link>
  </li>
);

export default LoginButton;
