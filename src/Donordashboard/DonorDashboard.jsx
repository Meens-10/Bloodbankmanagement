import React from 'react';
import DonorNavbar from './DonorNavbar';
import DonorLeaderboard from './DonorLeaderboard';
import Registration from './Registration';

const DonorDashboard = () => {
  return (
    <div>
      <DonorNavbar />
      <DonorLeaderboard />
      <Registration/>
    </div>
  );
};

export default DonorDashboard;