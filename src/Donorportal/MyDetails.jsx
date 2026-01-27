import { getDonor } from "./donorStore";
import "./donorportal.css";
export default function MyDetails() {
  const donor = getDonor();

  const donations = [
    {
      date: "2024-09-15",
      place: "Central Blood Bank",
      units: "450ml",
      receivedBy: "City Hospital - Patient #1234",
      id: "BBM2024091501"
    },
    {
      date: "2024-06-10",
      place: "City Hospital",
      units: "450ml",
      receivedBy: "Regional Hospital - Patient #5678",
      id: "BBM2024061002"
    },
    {
      date: "2024-03-05",
      place: "Community Camp",
      units: "450ml",
      receivedBy: "Emergency Ward - Patient #9012",
      id: "BBM2024030503"
    }
  ];

  return (
    <div className="tab-page">

      {/* RED PROFILE CARD */}
      <div className="profile-card">
        <div className="profile-left">
          <h3>{donor.name}</h3>
          <p className="role">Blood Donor</p>

          <div className="stat-block">
            <span>Blood Group</span>
            <strong>{donor.bloodGroup}</strong>
          </div>
        </div>

        <div className="profile-right">
          <div className="stat">
            <span>Total Donations</span>
            <strong>12</strong>
          </div>

          <div className="stat">
            <span>Lives Saved</span>
            <strong>36+</strong>
          </div>
        </div>
      </div>

      {/* CONTACT ROW */}
      <div className="profile-contact">
        <div>📞 {donor.phone}</div>
        <div></div>
        <div>✉️ {donor.email}</div>
      </div>

      {/* STATUS CARDS */}
      <div className="info-cards">
        <div className="info green">
          <p>Donation Status</p>
          <strong>Eligible</strong>
        </div>

        <div className="info blue">
          <p>Last Donation</p>
          <strong>{donor.lastDonation}</strong>
        </div>

        <div className="info purple">
          <p>Next Eligible</p>
          <strong>Dec 15, 2024</strong>
        </div>
      </div>

      {/* RECENT DONATIONS */}
      <div className="card">
        <h3>Recent Donations</h3>

        {donations.map((d, i) => (
          <div key={i} className="donation-row">
            <div className="donation-left">
              <div className="donation-date">🩸 {d.date}</div>
              <div className="donation-place">{d.place}</div>
              <div className="donation-units">Units: {d.units}</div>
              <div className="donation-received">
                ✔ Received by: {d.receivedBy}
              </div>
            </div>

            <div className="donation-id">
              ID: {d.id}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
