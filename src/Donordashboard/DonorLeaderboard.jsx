import React, { useState } from 'react';
import { TrendingUp, Trophy, Heart, Activity, CheckCircle } from 'lucide-react';
import './DonorLeaderboard.css';
import './DonorRegistrationForm.css';


const DonorLeaderboard = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bloodGroup: '',
    age: '',
    weight: '',
    address: '',
    medicalConditions: '',
    password: '',
    confirmPassword: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
      {/* Leaderboard Section */}
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

      {/* Registration Form Section */}
      <div className="registration-section">
        <div className="registration-form-card">
          {/* Header */}
          <div className="form-header">
            <div className="heartbeat-icon">
              <Activity size={32} color="#fff" strokeWidth={2.5} />
            </div>
            <h2 className="form-title">Register as Blood Donor</h2>
            <p className="form-subtitle">Join our community of life-savers</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <h3 className="section-header">Personal Information</h3>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="form-input"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+1 234-567-8900"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Blood Group <span className="required">*</span>
                </label>
                <select
                  name="bloodGroup"
                  className="form-select"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Age <span className="required">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  className="form-input"
                  placeholder="Age (18-65)"
                  value={formData.age}
                  onChange={handleChange}
                  min="18"
                  max="65"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Weight (kg) <span className="required">*</span>
                </label>
                <input
                  type="number"
                  name="weight"
                  className="form-input"
                  placeholder="Minimum 50kg"
                  value={formData.weight}
                  onChange={handleChange}
                  min="50"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-textarea"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">Medical Conditions (if any)</label>
                <textarea
                  name="medicalConditions"
                  className="form-textarea"
                  placeholder="List any medical conditions, medications, or allergies"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account Security */}
            <h3 className="section-header">Account Security</h3>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">
                  Password <span className="required">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="6"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Confirm Password <span className="required">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="Re-enter password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="eligibility-box">
              <div className="eligibility-header">
                <CheckCircle size={20} />
                <h4 className="eligibility-title">Donor Eligibility Criteria</h4>
              </div>
              <div className="criteria-grid">
                <div className="criteria-item">
                  <span className="criteria-bullet"></span>
                  <span>Age: 18-65 years</span>
                </div>
                <div className="criteria-item">
                  <span className="criteria-bullet"></span>
                  <span>Weight: Minimum 50 kg</span>
                </div>
                <div className="criteria-item">
                  <span className="criteria-bullet"></span>
                  <span>Good general health</span>
                </div>
                <div className="criteria-item">
                  <span className="criteria-bullet"></span>
                  <span>3 months gap between donations</span>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Register as Donor
              </button>
              <button type="button" className="login-link">
                Already have an account? Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default DonorLeaderboard;

