import { getDonor } from "./donorStore";
import "./donorportal.css";
import "./Reviews.css";

export default function MyDetails() {
  const donor = getDonor();

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      hospital: "City Hospital",
      message:
        "Thank you so much for your donation! Your blood helped save my life during a critical surgery. I am forever grateful.",
      bloodGroup: "O+"
    },
    {
      id: 2,
      name: "Michael Chen",
      hospital: "Regional Hospital",
      message:
        "Your generous donation helped me during my emergency treatment. Thank you for being a hero!",
      bloodGroup: "O+"
    },
    {
      id: 3,
      name: "Emily Davis",
      hospital: "Community Hospital",
      message:
        "Words cannot express my gratitude. Your selfless act gave me a second chance at life.",
      bloodGroup: "O+"
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

      {/* REVIEWS */}
      <div className="card">
        <h3>Reviews from Recipients</h3>

        <div className="reviews-container">
          {reviews.map((r) => (
            <div key={r.id} className="review-card">
              <div className="review-content">
                <div className="review-header">
                  <div>
                    <h4>{r.name}</h4>
                    <span>{r.hospital}</span>
                  </div>
                </div>

                <p className="review-message">{r.message}</p>

                <div className="review-footer">
                  <span>Blood Group: {r.bloodGroup}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
