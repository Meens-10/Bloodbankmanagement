
import "./inventory.css";

export default function Inventory() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="inventory-header">
        <h2>Blood Inventory Management</h2>
        <button className="add-btn">+ Add Stock</button>
      </div>

      {/* Table Card */}
      <div className="table-card">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Blood Group</th>
              <th>Units</th>
              <th>Location</th>
              <th>Expiry Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>INV001</td>
              <td>🩸 A+</td>
              <td>45</td>
              <td>Central Bank</td>
              <td>2025-01-15</td>
              <td><span className="status good">GOOD</span></td>
              <td>
                <button className="icon edit">✏️</button>
                <button className="icon delete">🗑️</button>
              </td>
            </tr>

            <tr>
              <td>INV002</td>
              <td>🩸 O-</td>
              <td>18</td>
              <td>Central Bank</td>
              <td>2024-12-22</td>
              <td><span className="status expiring">EXPIRING</span></td>
              <td>
                <button className="icon edit">✏️</button>
                <button className="icon delete">🗑️</button>
              </td>
            </tr>

            <tr>
              <td>INV003</td>
              <td>🩸 B+</td>
              <td>38</td>
              <td>North Center</td>
              <td>2025-02-10</td>
              <td><span className="status good">GOOD</span></td>
              <td>
                <button className="icon edit">✏️</button>
                <button className="icon delete">🗑️</button>
              </td>
            </tr>

            <tr>
              <td>INV004</td>
              <td>🩸 AB+</td>
              <td>15</td>
              <td>South Center</td>
              <td>2024-12-18</td>
              <td><span className="status expiring">EXPIRING</span></td>
              <td>
                <button className="icon edit">✏️</button>
                <button className="icon delete">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Alerts */}
      <div className="alert-box">
        <h4>⚠ Inventory Alerts</h4>
        <ul>
          <li>2 units of O- blood expiring in 5 days</li>
          <li>1 unit of AB+ blood expiring in 1 day</li>
          <li>Low stock alert: AB- blood (5 units remaining)</li>
        </ul>
      </div>

    </div>
  );
}
