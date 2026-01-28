import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id = "contact">
      <a href="contact"></a>
      <div className="footer-container">

        <div className="footer-col">
          <h3>🩸 Blood Bank</h3>
          <p>Saving lives through efficient blood donation management.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Donate Blood</li>
            <li>Request Blood</li>
            <li>Blood Camps</li>
            <li>Health Tips</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Emergency: 911</p>
          <p>Phone: +1 234 567 8900</p>
          <p>Email: info@bloodbank.org</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 Blood Bank Management System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
