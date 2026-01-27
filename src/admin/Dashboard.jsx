export default function Dashboard() {
  return (
    <>
      {/* Header */}
      {/* <div className="dashboard">
        <h1>Admin Portal</h1>
        <p>Manage inventory, donors, testing, and system users</p>
      </div> */}

      {/* Cards */}
      <div className="cards">
        <div className="card">
          <div className="card-icon blue">👥</div>
          <div>
            <div className="card-title">Total Donors</div>
            <div className="card-value">1245</div>
            <div className="card-sub">+12% from last month</div>
          </div>
        </div>

        <div className="card">
          <div className="card-icon red">🩸</div>
          <div>
            <div className="card-title">Total Donations</div>
            <div className="card-value">3421</div>
            <div className="card-sub">+15% from last month</div>
          </div>
        </div>

        <div className="card">
          <div className="card-icon yellow">🧪</div>
          <div>
            <div className="card-title">Pending Tests</div>
            <div className="card-value">8</div>
            <div className="card-sub">Requires testing</div>
          </div>
        </div>

        <div className="card">
          <div className="card-icon purple">📦</div>
          <div>
            <div className="card-title">Inventory Units</div>
            <div className="card-value">193</div>
            <div className="card-sub">Across all locations</div>
          </div>
        </div>

        <div className="card">
          <div className="card-icon green">✅</div>
          <div>
            <div className="card-title">Active Donors</div>
            <div className="card-value">892</div>
            <div className="card-sub">+8% from last month</div>
          </div>
        </div>

        <div className="card">
          <div className="card-icon orange">📅</div>
          <div>
            <div className="card-title">Upcoming Camps</div>
            <div className="card-value">5</div>
            <div className="card-sub">This month</div>
          </div>
        </div>

        <div className="card">
          <div className="card-icon red">❌</div>
          <div>
            <div className="card-title">Discarded Bags</div>
            <div className="card-value">23</div>
            <div className="card-sub">Safety protocols</div>
          </div>
        </div>

        <div className="card">
          <div className="card-icon gray">⏳</div>
          <div>
            <div className="card-title">Pending Requests</div>
            <div className="card-value">12</div>
            <div className="card-sub">Requires attention</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity">
        <h3>Recent Activity</h3>

        <div className="activity-item">
          <div className="activity-icon icon-green">✔</div>
          <div className="activity-content">
            <h4>Blood bag BAG2024003 cleared all tests</h4>
            <p>Added to inventory - B+ Blood Group</p>
            <span className="activity-time">2 hours ago</span>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-icon icon-red">✖</div>
          <div className="activity-content">
            <h4>Blood bag BAG2024004 discarded</h4>
            <p>Hepatitis B positive - Safety protocol followed</p>
            <span className="activity-time">3 hours ago</span>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-icon icon-blue">🩸</div>
          <div className="activity-content">
            <h4>Blood request fulfilled</h4>
            <p>City Hospital - 3 units A+</p>
            <span className="activity-time">4 hours ago</span>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-icon icon-orange">📅</div>
          <div className="activity-content">
            <h4>Blood camp completed</h4>
            <p>University Drive - 187 donations collected</p>
            <span className="activity-time">1 day ago</span>
          </div>
        </div>
      </div>
    </>
  );
}
