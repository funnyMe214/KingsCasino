import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import ClipLoader from 'react-spinners/ClipLoader';
import '../styles/dashboard.css';

// Define SVG options for profile pictures
const svgOptions = [
  '/profile1.svg',
  '/profile2.svg',
  '/profile3.svg',
  '/profile4.svg'
];

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [username, setUsername] = useState('');
  const [gamesEnrolled, setGamesEnrolled] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(svgOptions[0]);
  const [selectedPicIndex, setSelectedPicIndex] = useState(0); // Track selected picture index
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/users.json')
        .then((res) => res.json())
        .then((data) => {
          const user = data.find((u) => u.username === session.user.name);
          if (user) {
            setUsername(user.username);
            setGamesEnrolled(user.gamesEnrolled);
            setProfilePic(user.profilePic || svgOptions[0]);
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [session, status, router]);

  const handleProfilePicChange = (pic) => {
    setProfilePic(pic);
    setIsModalOpen(false);
    // Here, you should also persist this change to your backend
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Here, you should also persist this change to your backend
  };

  const handleNextPic = () => {
    setSelectedPicIndex((prevIndex) => (prevIndex + 1) % svgOptions.length);
  };

  const handlePrevPic = () => {
    setSelectedPicIndex((prevIndex) =>
      prevIndex === 0 ? svgOptions.length - 1 : prevIndex - 1
    );
  };

  if (status === 'loading') {
    return (
      <div className="loader-container">
        <ClipLoader color="#0070f3" loading={true} size={50} />
      </div>
    );
  }

  return (
    <Layout>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="profile">
          <img src={profilePic} alt="Profile Pic" width={100} height={100} />
          <button className="change-pic-btn" onClick={() => setIsModalOpen(true)}>
            Change Profile Pic
          </button>
          <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal">
            <h2>Select a Profile Picture</h2>
            <div className="profile-pic-selection">
              <button onClick={handlePrevPic}>Previous</button>
              <img
                src={svgOptions[selectedPicIndex]}
                alt="Profile Pic Option"
                width={50}
                height={50}
                style={{ margin: '10px' }}
              />
              <button onClick={handleNextPic}>Next</button>
            </div>
            <div className="profile-pic-selection">
              <button onClick={() => handleProfilePicChange(svgOptions[selectedPicIndex])}>Select</button>
            </div>
          </Modal>
        </div>
        <div className="username">
          <label>Username: </label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="games-enrolled">
          <p>Games Enrolled: {gamesEnrolled}</p>
        </div>
      </div>
    </Layout>
  );
}
