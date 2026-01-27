import "./Donors.css";


export default function Donors() {
  return (
    <div className="page-container">

      <h2 className="donor-title">Donor Health Verification</h2>

      {/* DONOR CARD 1 */}
      <div className="donor-card">
        <div className="donor-header">
          <span className="badge pending">PENDING</span>
          <span className="donor-id">ID: DV001</span>
        </div>

        <div className="donor-info">
          <div>
            <label>Donor Name</label>
            <p>John Smith</p>
          </div>

          <div>
            <label>Blood Group</label>
            <p>O+</p>
          </div>

          <div>
            <label>Last Donation</label>
            <p>2024-09-15</p>
          </div>

          <div>
            <label>Health Status</label>
            <p>Good - No issues reported</p>
          </div>

          <div className="donor-actions">
            <button className="btn-green">✔ Approve</button>
            <button className="btn-red">✖ Reject</button>
          </div>
        </div>
      </div>

      {/* DONOR CARD 2 */}
      <div className="donor-card">
        <div className="donor-header">
          <span className="badge pending">PENDING</span>
          <span className="donor-id">ID: DV002</span>
        </div>

        <div className="donor-info">
          <div>
            <label>Donor Name</label>
            <p>Sarah Johnson</p>
          </div>

          <div>
            <label>Blood Group</label>
            <p>A+</p>
          </div>

          <div>
            <label>Last Donation</label>
            <p>2024-08-20</p>
          </div>

          <div>
            <label>Health Status</label>
            <p>Good - All tests normal</p>
          </div>

          <div className="donor-actions">
            <button className="btn-green">✔ Approve</button>
            <button className="btn-red">✖ Reject</button>
          </div>
        </div>
      </div>

      {/* DONOR CARD 3 */}
      <div className="donor-card">
        <div className="donor-header">
          <span className="badge approved">APPROVED</span>
          <span className="donor-id">ID: DV003</span>
        </div>

        <div className="donor-info">
          <div>
            <label>Donor Name</label>
            <p>Mike Williams</p>
          </div>

          <div>
            <label>Blood Group</label>
            <p>B-</p>
          </div>

          <div>
            <label>Last Donation</label>
            <p>2024-10-05</p>
          </div>

          <div>
            <label>Health Status</label>
            <p>Excellent</p>
          </div>
        </div>
      </div>

    </div>
  );
}
