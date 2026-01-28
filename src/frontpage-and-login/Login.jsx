import "../Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      
      {/* LEFT PANEL */}
      <div className="login-left">
        <p className="back-home" onClick={() => navigate("/")}>
        <h2> ⬅ Back to Home</h2> 
        </p>

        <div className="brand">
          <div className="logo">🩸</div>
          <div>
            <h2>Blood Bank</h2>
            <p>Management System</p>
          </div>
        </div>

        <p className="tagline">
          Secure authentication with role-based access control
        </p>

        <div className="features">
          <div className="feature">
            <div className="icon red">👥</div>
            <div>
              <h4>Donor Portal</h4>
              <p>Register, schedule donations, and view history</p>
            </div>
          </div>

          <div className="feature">
            <div className="icon red">🏥</div>
            <div>
              <h4>Hospital Access</h4>
              <p>Search inventory and request blood units</p>
            </div>
          </div>

          <div className="feature">
            <div className="icon red">👨‍💼</div>
            <div>
              <h4>Admin Control</h4>
              <p>Manage inventory, camps, and donor verification</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="login-right">
        <h2> 👋 Sign In</h2>

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="login-btn" onClick={() => navigate("/donorportal")}>Sign In</button>

        <div className="demo-box">
          <h4>Demo Credentials:</h4>

          <div className="demo-row">
            <span className="demo-icon green">👥</span>
            <p><b>Donor:</b> john.smith@donor.com / donor@123</p>
          </div>

          <div className="demo-row">
            <span className="demo-icon blue">🏥</span>
            <p><b>Hospital:</b> contact@cityhospital.com / hospital@123</p>
          </div>

          <div className="demo-row">
            <span className="demo-icon purple">👨‍💼</span>
            <p><b>Admin:</b> admin@bloodbank.org / admin@123</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;

