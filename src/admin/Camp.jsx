export default function Camp() {
  return (
    <div className="page-container">
      <h2 className="page-title">Organize New Camp</h2>

      <div className="camp-card">
        <div className = "form-grid">
          <div className="form-group">
            <label>Camp Name *</label>
            <input type="text" placeholder="e.g., Community Health Drive" />
          </div>

          <div className="form-group">
            <label>Location *</label>
            <input type="text" placeholder="e.g., City Community Center" />
          </div>

          <div className="form-group">
            <label>Date *</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Time *</label>
            <input type="text" placeholder="e.g., 09:00 AM - 05:00 PM" />
          </div>

          <div className="form-group">
            <label>Expected Donors *</label>
            <input type="number" placeholder="e.g., 100" />
          </div>
        </div>

     
        <div className="form-footer">
          <button className="btn-create">Create Camp</button>
        </div>
      </div>
  
<div className="camp-list-card">
  <h3 className="section-title">Blood Donation Camps</h3>


  <div className="camp-item">
    <div className="camp-header">
      <span className="status scheduled">SCHEDULED</span>
      <span className="camp-id">ID: CAMP001</span>
    </div>

    <h4>Community Health Drive</h4>

    <div className="camp-info">
      <div>📍 City Community Center</div>
      <div>📅 2024-12-20</div>
      <div>⏰ 09:00 AM - 05:00 PM</div>
      <div>👥 0 / 150</div>
    </div>

    <div className="camp-actions">
      <button className="btn-light">View Details</button>
      <button className="btn-blue">Edit</button>
      <button className="btn-red">Cancel</button>
    </div>
  </div>


  <div className="camp-item">
    <div className="camp-header">
      <span className="status ongoing">ONGOING</span>
      <span className="camp-id">ID: CAMP002</span>
    </div>

    <h4>Corporate Blood Drive</h4>

    <div className="camp-info">
      <div>📍 Tech Corp Headquarters</div>
      <div>📅 2024-12-17</div>
      <div>⏰ 10:00 AM - 04:00 PM</div>
      <div>👥 67 / 100</div>
    </div>

    <div className="camp-actions">
      <button className="btn-light">View Details</button>
    </div>
  </div>


  <div className="camp-item">
    <div className="camp-header">
      <span className="status completed">COMPLETED</span>
      <span className="camp-id">ID: CAMP003</span>
    </div>

    <h4>University Campus Drive</h4>

    <div className="camp-info">
      <div>📍 State University</div>
      <div>📅 2024-12-10</div>
      <div>⏰ 09:00 AM - 06:00 PM</div>
      <div>👥 187 / 200</div>
    </div>

    <div className="camp-actions">
      <button className="btn-light">View Details</button>
    </div>
  </div>
</div>

    </div>
  );
}
