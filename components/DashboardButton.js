// components/DashboardButton.js
import Link from 'next/link';

const DashboardButton = () => {
  return (
    <li className="nav-item mx-2">
      <Link href="/dashboard" className="nav-link">Dashboard</Link>
    </li>
  );
};

export default DashboardButton;
