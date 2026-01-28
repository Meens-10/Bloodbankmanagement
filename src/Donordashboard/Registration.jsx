import { useState } from "react";
import { Activity, CheckCircle } from "lucide-react";
import "./DonorRegistrationForm.css";
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
      alert("Passwords do not match");
      return;
    }

    console.log("Registered Donor Data:", formData);
    alert("Donor Registered Successfully!");
     navigate("/donorportal");
    
  };

  return (
    <div className="registration-section">
      <div className="registration-form-card">

        {/* Header */}
        <div className="form-header">
          <div className="heartbeat-icon">
            <Activity size={32} color="#fff" strokeWidth={2.5} />
          </div>
          <h2 className="form-title">Register as Blood Donor</h2>
          <p className="form-subtitle">
            Join our community of life-savers
          </p>
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
              <label className="form-label">
                Medical Conditions (if any)
              </label>
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
                minLength={6}
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

          {/* Eligibility */}
          <div className="eligibility-box">
            <div className="eligibility-header">
              <CheckCircle size={20} />
              <h4 className="eligibility-title">
                Donor Eligibility Criteria
              </h4>
            </div>

            <div className="criteria-grid">
              <div className="criteria-item">Age: 18–65 years</div>
              <div className="criteria-item">Weight: Minimum 50 kg</div>
              <div className="criteria-item">Good general health</div>
              <div className="criteria-item">
                3 months gap between donations
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Register as Donor
            </button>
           <button
  type="button"
  className="login-link"
  onClick={() => navigate("/login")}
>
  Already have an account? Login
</button>

            
          </div>
        </form>
      </div>
    </div>
  );
}
