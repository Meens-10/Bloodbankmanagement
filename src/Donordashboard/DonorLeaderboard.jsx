import React from 'react';
import { TrendingUp, Trophy, Heart } from 'lucide-react';
import './DonorLeaderboard.css';

const DonorLeaderboard = () => {
  const topDonors = [
    {
      rank: 1,
      name: 'Sarah Williams',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      bloodType: 'O+',
      donations: 48,
      livesSaved: 144,
      badge: 'silver'
    },
    {
      rank: 2,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bloodType: 'A+',
      donations: 42,
      livesSaved: 126,
      badge: 'gold'
    },
    {
      rank: 3,
      name: 'Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bloodType: 'B+',
      donations: 38,
      livesSaved: 114,
      badge: 'gold'
    }
  ];

  const otherDonors = [
    {
      rank: 4,
      name: 'David Thompson',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      bloodType: 'AB+',
      donations: 35,
      livesSaved: 105
    },
    {
      rank: 5,
      name: 'Jennifer Park',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      bloodType: 'O-',
      donations: 32,
      livesSaved: 96
    },
    {
      rank: 6,
      name: 'James Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      bloodType: 'A-',
      donations: 28,
      livesSaved: 84
    }
  ];

  return (
    <div className="container">
      <div className="card">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <div className="icon-box">
              <Trophy size={32} color="#fff" />
            </div>
            <div>
              <h1 className="title">Best Donors</h1>
              <p className="subtitle">Our heroes making the biggest impact</p>
            </div>
          </div>
          <button className="top-contributors-btn">
            <TrendingUp size={16} />
            <span>Top Contributors</span>
          </button>
        </div>

        {/* Top 3 Donors */}
        <div className="top-three">
          {topDonors.map((donor) => (
            <div key={donor.rank} className="top-donor-card">
              <div className="image-container">
                <img src={donor.image} alt={donor.name} className="top-donor-image" />
                <div className={donor.badge === 'silver' ? 'badge silver-badge' : 'badge gold-badge'}>
                  <Trophy size={12} />
                  <span>#{donor.rank}</span>
                </div>
                <div className="blood-type">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1C6 1 3 4 3 6.5C3 8.433 4.567 10 6.5 10C8.433 10 10 8.433 10 6.5C10 4 7 1 7 1H6Z" fill="white" stroke="white" strokeWidth="0.5"/>
                  </svg>
                  <span>{donor.bloodType}</span>
                </div>
                <h3 className="donor-name">{donor.name}</h3>
              </div>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">{donor.donations}</div>
                  <div className="stat-label">Donations</div>
                </div>
                <div className="stat">
                  <div className="stat-number pink">{donor.livesSaved}</div>
                  <div className="stat-label">Lives Saved</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Donors */}
        <div className="other-donors">
          {otherDonors.map((donor) => (
            <div key={donor.rank} className="donor-row">
              <div className="donor-left">
                <div className="rank-badge">#{donor.rank}</div>
                <img src={donor.image} alt={donor.name} className="small-avatar" />
                <div>
                  <div className="donor-row-name">{donor.name}</div>
                  <div className="blood-type-small">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1C6 1 3 4 3 6.5C3 8.433 4.567 10 6.5 10C8.433 10 10 8.433 10 6.5C10 4 7 1 7 1H6Z" fill="#666" stroke="#666" strokeWidth="0.5"/>
                    </svg>
                    <span>{donor.bloodType}</span>
                  </div>
                </div>
              </div>
              <div className="donor-right">
                <div className="mini-stat">
                  <div className="mini-stat-number">{donor.donations}</div>
                  <div className="mini-stat-label">donations</div>
                </div>
                <div className="mini-stat">
                  <div className="mini-stat-number pink">{donor.livesSaved}</div>
                  <div className="mini-stat-label">lives</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="footer">
          <Heart size={40} color="#dc2626" fill="#dc2626" />
          <h2 className="footer-title">Every donation counts!</h2>
          <p className="footer-text">
            Join these amazing donors and make a life-saving difference today. Together, we save lives! 💪
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonorLeaderboard;