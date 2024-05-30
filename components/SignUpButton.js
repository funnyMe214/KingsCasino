// components/SignUpButton.js
import Link from 'next/link';

const SignUpButton = () => (
  <li className="nav-item mx-2">
    <Link href="/signup" className="nav-link">Sign Up</Link>
  </li>
);

export default SignUpButton;
