import { useNavigate, } from "react-router-dom";
import "./Services.css";

function Services() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p className="services-subtext">
        Comprehensive blood bank management for everyone
      </p>

      <div className="services-cards">

        {/* Donors */}
        <div className="service-card">
          <div className="icon-circle green">👥</div>
          <h3>For Donors</h3>
          <ul className="green-list">
            <li>Register and create your profile</li>
            <li>Schedule donation appointments</li>
            <li>Track donation history</li>
            <li>Find nearby donation camps</li>
          </ul>
          <button className="donor-btn" onClick={goToLogin}>
            Donate Now
          </button>
        </div>

        {/* Hospitals */}
        <div className="service-card">
          <div className="icon-circle blue">🏥</div>
          <h3>For Hospitals</h3>
          <ul className="blue-list">
            <li>Search blood availability</li>
            <li>Request blood units</li>
            <li>Track request status</li>
            <li>Emergency blood requests</li>
          </ul>
          <button className="hospital-btn" onClick={goToLogin}>
            Hospital Access
          </button>
        </div>

        {/* Admins */}
        <div className="service-card">
          <div className="icon-circle purple">👨‍💼</div>
          <h3>For Admins</h3>
          <ul className="purple-list">
            <li>Manage blood inventory</li>
            <li>Organize donation camps</li>
            <li>Verify donor health status</li>
            <li>Generate reports</li>
          </ul>
          <button className="admin-btn" onClick={goToLogin}>
            Admin Login
          </button>
        </div>

      </div>
    </section>
  );
}

export default Services;
