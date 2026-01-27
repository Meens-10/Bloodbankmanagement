import "./Users.css";

export default function Users() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2>User Account Management</h2>
        <button className="btn-add">+ Add User</button>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Hospital</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>USR001</td>
              <td>Dr. Jane Smith</td>
              <td>jane.smith@cityhospital.com</td>
              <td><span className="badge hospital">HOSPITAL</span></td>
              <td>City Hospital</td>
              <td><span className="status active">ACTIVE</span></td>
              <td>2024-12-16</td>
              <td className="actions">
                <button className="icon edit">✏️</button>
                <button className="icon disable">⛔</button>
                <button className="icon delete">🗑️</button>
              </td>
            </tr>

            <tr>
              <td>USR002</td>
              <td>Robert Johnson</td>
              <td>robert.j@bloodbank.org</td>
              <td><span className="badge staff">STAFF</span></td>
              <td>-</td>
              <td><span className="status active">ACTIVE</span></td>
              <td>2024-12-17</td>
              <td className="actions">
                <button className="icon edit">✏️</button>
                <button className="icon disable">⛔</button>
                <button className="icon delete">🗑️</button>
              </td>
            </tr>

            <tr>
              <td>USR003</td>
              <td>Admin User</td>
              <td>admin@bloodbank.org</td>
              <td><span className="badge admin">ADMIN</span></td>
              <td>-</td>
              <td><span className="status active">ACTIVE</span></td>
              <td>2024-12-17</td>
              <td className="actions">
                <button className="icon edit">✏️</button>
                <button className="icon disable">⛔</button>
                <button className="icon delete">🗑️</button>
              </td>
            </tr>

            <tr>
              <td>USR004</td>
              <td>Dr. Michael Chen</td>
              <td>michael.chen@regionalhospital.com</td>
              <td><span className="badge hospital">HOSPITAL</span></td>
              <td>Regional Hospital</td>
              <td><span className="status inactive">INACTIVE</span></td>
              <td>2024-11-25</td>
              <td className="actions">
                <button className="icon edit">✏️</button>
                <button className="icon enable">✔️</button>
                <button className="icon delete">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
