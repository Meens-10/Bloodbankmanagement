export default function Testing() {
  return (
    <div className="page-container">

      <h2 className="testing-title">Blood Testing & Quality Control</h2>

    
      <div className="test-card">
        <div className="test-header">
          <span className="badge pending">PENDING</span>
          <span>Bag ID: BAG2024001</span>
        </div>

        <div className="test-info">
          <div><b>Donor:</b> John Smith</div>
          <div><b>Blood Group:</b> O+</div>
          <div><b>Collection Date:</b> 2024-12-15</div>
        </div>

        <div className="test-results">
          <span className="result pending">HIV - PENDING</span>
          <span className="result pending">Hepatitis B - PENDING</span>
          <span className="result pending">Hepatitis C - PENDING</span>
          <span className="result pending">Syphilis - PENDING</span>
          <span className="result pending">Malaria - PENDING</span>
        </div>

        <div className="test-actions">
          <button className="btn-blue">Update Results</button>
          <button className="btn-outline">View Full Report</button>
        </div>
      </div>

      {/* TEST CARD 2 */}
      <div className="test-card">
        <div className="test-header">
          <span className="badge testing">TESTING</span>
          <span>Bag ID: BAG2024002</span>
        </div>

        <div className="test-info">
          <div><b>Donor:</b> Sarah Johnson</div>
          <div><b>Blood Group:</b> A+</div>
          <div><b>Collection Date:</b> 2024-12-14</div>
        </div>

        <div className="test-results">
          <span className="result safe">HIV - NEGATIVE</span>
          <span className="result safe">Hepatitis B - NEGATIVE</span>
          <span className="result pending">Hepatitis C - PENDING</span>
          <span className="result safe">Syphilis - NEGATIVE</span>
          <span className="result pending">Malaria - PENDING</span>
        </div>

        <div className="test-actions">
          <button className="btn-blue">Update Results</button>
          <button className="btn-outline">View Full Report</button>
        </div>
      </div>

      <div className="test-card">
        <div className="test-header">
          <span className="badge completed">COMPLETED</span>
          <span className="badge safe">SAFE</span>
          <span>Bag ID: BAG2024003</span>
        </div>

        <div className="test-info">
          <div><b>Donor:</b> Mike Williams</div>
          <div><b>Blood Group:</b> B+</div>
          <div><b>Collection Date:</b> 2024-12-13</div>
        </div>

        <div className="test-results">
          <span className="result safe">HIV - NEGATIVE</span>
          <span className="result safe">Hepatitis B - NEGATIVE</span>
          <span className="result safe">Hepatitis C - NEGATIVE</span>
          <span className="result safe">Syphilis - NEGATIVE</span>
          <span className="result safe">Malaria - NEGATIVE</span>
        </div>

        <div className="test-actions">
          <button className="btn-green">✔ Approve & Add to Inventory</button>
          <button className="btn-outline">View Full Report</button>
        </div>
      </div>

      <div className="test-card">
        <div className="test-header">
          <span className="badge completed">COMPLETED</span>
          <span className="badge unsafe">UNSAFE</span>
          <span>Bag ID: BAG2024004</span>
        </div>

        <div className="test-info">
          <div><b>Donor:</b> Emily Davis</div>
          <div><b>Blood Group:</b> AB+</div>
          <div><b>Collection Date:</b> 2024-12-12</div>
        </div>

        <div className="test-results">
          <span className="result safe">HIV - NEGATIVE</span>
          <span className="result danger">Hepatitis B - POSITIVE</span>
          <span className="result safe">Hepatitis C - NEGATIVE</span>
          <span className="result safe">Syphilis - NEGATIVE</span>
          <span className="result safe">Malaria - NEGATIVE</span>
        </div>

        <div className="test-actions">
          <button className="btn-red">⛔ Discard Blood Bag</button>
          <button className="btn-outline">View Full Report</button>
        </div>
      </div>

  
      <div className="safety-box">
        <h4>⚠ Safety Protocol</h4>
        <p>
          All blood donations must pass tests for HIV, Hepatitis B, Hepatitis C,
          Syphilis, and Malaria. Any positive result will automatically flag the
          bag as unsafe and must be discarded.
        </p>
      </div>

    </div>
  );
}
