import "./Reviews.css";

export default function Reviews() {
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
    <div className="reviews-container">
      <h3 className="reviews-title">Reviews from Recipients</h3>

      {reviews.map((r) => (
        <div key={r.id} className="review-card">
          <div className="review-icon">⁠♡</div>

          <div className="review-content">
            <div className="review-header">
              <div>
                <h4>{r.name}</h4>
                <span>{r.hospital}</span>
              </div>
            </div>

            <p className="review-message">{r.message}</p>

            <div className="review-footer">
              <span className="blood-icon"></span>
              <span>Blood Group: {r.bloodGroup}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
