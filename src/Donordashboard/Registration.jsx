import { useState } from "react";
import { Activity, CheckCircle, Trophy, Heart, Droplet } from "lucide-react";
import "./Registration.css";
import DonorNavbar from "./DonorNavbar";
import Login from "../frontpage-and-login/Login";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    age: "",
    weight: "",
    address: "",
    medicalConditions: "",
    password: "",
    confirmPassword: "",
  });


  const topDonors = [
    {
      rank: 1,
      name: 'Sarah Williams',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      bloodType: 'O+',
      donations: 48,
      livesSaved: 144,
      badge: 'PLATINUM',
    },
    {
      rank: 2,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      bloodType: 'A+',
      donations: 42,
      livesSaved: 126,
      badge: 'GOLD',
    },
    {
      rank: 3,
      name: 'Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      bloodType: 'B+',
      donations: 38,
      livesSaved: 114,
      badge: 'GOLD',
    },
    {
      rank: 4,
      name: 'David Thompson',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      bloodType: 'AB+',
      donations: 35,
      livesSaved: 105,
      badge: 'SILVER',
    },
    {
      rank: 5,
      name: 'Jennifer Park',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      bloodType: 'O-',
      donations: 32,
      livesSaved: 96,
      badge: 'SILVER',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.age < 18 || formData.age > 65) {
      alert("Age must be between 18 and 65 years");
      return;
    }

    if (formData.weight < 50) {
      alert("Weight must be at least 50 kg");
      return;
    }

    console.log("Registered Donor Data:", formData);
    alert("✅ Donor Registered Successfully! Thank you for saving lives!");
    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      bloodGroup: "",
      age: "",
      weight: "",
      address: "",
      medicalConditions: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    
    <div className="blood-donor-page">
      <DonorNavbar />
    
      <div className="left-section">
        <div className="registration-card">
    
          <div className="card-header">
            <div className="icon-circle">
              <Activity size={32} strokeWidth={2.5} />
            </div>
            <h1 className="main-title">Register as Blood Donor</h1>
            <p className="main-subtitle">Join our community of life-savers</p>
          </div>

          <form onSubmit={handleSubmit} className="donor-form">
          
            <div className="form-section">
              <h2 className="section-title">Personal Information</h2>

              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="text-input"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    Email <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="text-input"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">
                    Phone Number <span className="required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="text-input"
                    placeholder="+1 234-567-8900"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    Blood Group <span className="required-star">*</span>
                  </label>
                  <select
                    name="bloodGroup"
                    className="select-input"
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
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">
                    Age <span className="required-star">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    className="text-input"
                    placeholder="Age (18-65)"
                    value={formData.age}
                    onChange={handleChange}
                    min="18"
                    max="65"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    Weight (kg) <span className="required-star">*</span>
                  </label>
                  <input
                    type="number"
                    name="weight"
                    className="text-input"
                    placeholder="Minimum 50kg"
                    value={formData.weight}
                    onChange={handleChange}
                    min="50"
                    required
                  />
                </div>
              </div>

              <div className="form-field full-width">
                <label className="field-label">Address</label>
                <textarea
                  name="address"
                  className="textarea-input"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <div className="form-field full-width">
                <label className="field-label">Medical Conditions (if any)</label>
                <textarea
                  name="medicalConditions"
                  className="textarea-input"
                  placeholder="List any medical conditions, medications, or allergies"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
            </div>
            <div className="form-section">
              <h2 className="section-title">Account Security</h2>

              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">
                    Password <span className="required-star">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="text-input"
                    placeholder="Minimum 6 characters"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    Confirm Password <span className="required-star">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="text-input"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="eligibility-box">
              <div className="eligibility-header">
                <CheckCircle size={20} className="check-icon" />
                <h3 className="eligibility-title">Donor Eligibility Criteria</h3>
              </div>

              <div className="criteria-list">
                <div className="criteria-item">
                  <span className="bullet">•</span> Age: 18–65 years
                </div>
                <div className="criteria-item">
                  <span className="bullet">•</span> Weight: Minimum 50 kg
                </div>
                <div className="criteria-item">
                  <span className="bullet">•</span> Good general health
                </div>
                <div className="criteria-item">
                  <span className="bullet">•</span> 3 months gap between donations
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="primary-btn">
                Register as Donor
              </button>
              <button type="button" className="secondary-btn" onClick={()=> navigate("/login")} >
                Already have an account? Login
              </button>
            </div>
          </form>
        </div>
      </div>

    
      <div className="right-section">
        <div className="leaderboard-card">
      
          <div className="leaderboard-header">
            <Trophy size={28} className="trophy-icon" />
            <div className="header-text">
              <h2 className="leaderboard-title">Top Donors</h2>
              <p className="leaderboard-subtitle">Community leaders saving lives</p>
            </div>
          </div>

        
          <div className="first-donor-card">
            <div className="first-donor-image-wrapper">
              <img
                src={topDonors[0].image}
                alt={topDonors[0].name}
                className="first-donor-image"
              />
              <div className="first-badge">
                <Trophy size={14} />
                <span>#{topDonors[0].rank}</span>
              </div>
            </div>
            
            <h3 className="first-donor-name">{topDonors[0].name}</h3>
            
            <div className="first-donor-stats">
              <div className="stat-box">
                <Droplet size={16} className="stat-icon" />
                <div className="stat-number">{topDonors[0].bloodType}</div>
              </div>
              <div className="stat-box">
                <Heart size={16} className="stat-icon" />
                <div className="stat-number">{topDonors[0].donations}</div>
                <div className="stat-label">Donations</div>
              </div>
              <div className="stat-box highlight">
                <Activity size={16} className="stat-icon" />
                <div className="stat-number">{topDonors[0].livesSaved}</div>
                <div className="stat-label">Lives Saved</div>
              </div>
            </div>
          </div>

        
          <div className="donors-list">
            {topDonors.slice(1).map((donor) => (
              <div key={donor.rank} className="donor-row">
                <div className="donor-left">
                  <div className="rank-number">#{donor.rank}</div>
                  <img src={donor.image} alt={donor.name} className="donor-image" />
                  <div className="donor-info">
                    <div className="donor-name">{donor.name}</div>
                    <div className="donor-stats">
                      <span className="blood-type">{donor.bloodType}</span>
                      <span className="divider">•</span>
                      <span className="donations">{donor.donations} donations</span>
                    </div>
                  </div>
                </div>
                <div className="donor-right">
                  <div className="lives-saved">{donor.livesSaved} lives</div>
                  <span className={`badge badge-${donor.badge.toLowerCase()}`}>
                    {donor.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="motivation-section">
            <Heart size={40} className="heart-icon-large" fill="currentColor" />
            <h3 className="motivation-title">Every donation counts!</h3>
            <p className="motivation-text">
              Join these amazing donors and make a life-saving difference today. Together, we save lives! 💪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}