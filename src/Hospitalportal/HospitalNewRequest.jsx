import "./newrequest.css";
import { Link } from "react-router-dom";

export default function HospitalNewRequest() {
  return (
    <>
      

      <div className="form-box">
        <h2>Submit Blood Request</h2>

        <div className="form-grid">
          <select required>
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <input type="number" placeholder="Units Required" required />

          <select required>
          <option value="">stages</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>

          <input type="date" required />

          <input type="text" placeholder="Patient Name" required />

          <input type="number" placeholder="Patient Age" required />
        </div>

        <textarea
          placeholder="Describe the medical reason for the blood request"
          required
        />

        <div className="warning">
          ⚠ Please ensure all information is accurate. For critical requests,
          call emergency hotline: 1-800-BLOOD-911
        </div>

        <div className="actions">
          <button type="button" className="submit">Submit Request</button>
          <button type="button" className="reset">Reset Form</button>
        </div>
      </div>
    </>
  );
}
