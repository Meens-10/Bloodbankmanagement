import "./WhyDonate.css";
import { useNavigate } from "react-router-dom";

export default function WhyDonate() {
  const navigate = useNavigate();
  
  return (
    <div className="why-container" id = "why-donate">
   
      <div className="why-left">
        <h1>Why Blood Donation Matters</h1>

        <p className="why-desc">
          Every two seconds, someone needs blood. Your donation can save up to
          three lives. Join thousands of donors who regularly contribute to
          saving lives in our community.
        </p>
        <a href="#why-donate"></a>

        <div className="why-feature">
          <div className="icon-box">❤️</div>
          <div>
            <h4>Save Lives</h4>
            <p>One donation can save up to 3 lives</p>
          </div>
        </div>

        <div className="why-feature">
          <div className="icon-box">📅</div>
          <div>
            <h4>Easy Scheduling</h4>
            <p>Book appointments at your convenience</p>
          </div>
        </div>

        <div className="why-feature">
          <div className="icon-box">🛡️</div>
          <div>
            <h4>Safe & Secure</h4>
            <p>All safety protocols followed</p>
          </div>
        </div>
      </div>

    
      <div className="why-right">
        <h2>Donation Requirements</h2>

        <ul>
          <li>Age: 18-65 years</li>
          <li>Weight: Minimum 50 kg</li>
          <li>Good general health</li>
          <li>3 months gap between donations</li>
        </ul>

        <button className="donor-btn" onClick={() => navigate("/donor")}>
          Register as Donor
        </button>
      </div>
    </div>
  );
}
