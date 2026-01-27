export default function AdminNavbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">🩸</div>
        <div className="brand-text">
          <h3>Blood Bank</h3>
          <p>Management System</p>
        </div>
      </div>

      <div className="nav-right">
        <div>
          <strong>Admin User</strong>
          <p style={{ margin: 0, fontSize: "12px", color: "#6b7280" }}>
            admin@bloodbank.org
          </p>
        </div>

        <span className="badge">ADMIN</span>
        <button className="icon-btn">👤</button>
        <button className="icon-btn">⏻ Logout</button>
      </div>
    </div>
  );
}
