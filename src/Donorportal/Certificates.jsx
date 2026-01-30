import jsPDF from "jspdf";
import "./Certificates.css";

export default function Certificates() {
  const certificates = [
    {
      id: "BBM2024091501",
      date: "2024-09-15",
      bloodGroup: "O+",
      units: "450ml",
      location: "Central Blood Bank"
    },
    {
      id: "BBM2024061002",
      date: "2024-06-10",
      bloodGroup: "A+",
      units: "450ml",
      location: "City Hospital"
    },
    {
      id: "BBM2024030503",
      date: "2024-03-05",
      bloodGroup: "B+",
      units: "350ml",
      location: "Community Camp"
    },
    {
      id: "BBM2023121204",
      date: "2023-12-12",
      bloodGroup: "O-",
      units: "450ml",
      location: "Regional Blood Center"
    },
    {
      id: "BBM2023110505",
      date: "2023-11-05",
      bloodGroup: "AB+",
      units: "350ml",
      location: "Metro Medical Camp"
    }
  ];
  

  const downloadCertificate = (cert) => {
    const pdf = new jsPDF();

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Blood Donation Certificate", 105, 30, { align: "center" });

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");

    pdf.text(`Certificate ID: ${cert.id}`, 20, 50);
    pdf.text(`Donation Date: ${cert.date}`, 20, 65);
    pdf.text(`Blood Group: ${cert.bloodGroup}`, 20, 80);
    pdf.text(`Units Donated: ${cert.units}`, 20, 95);
    pdf.text(`Location: ${cert.location}`, 20, 110);

    pdf.text(
      "Thank you for your noble contribution in saving lives.",
      20,
      140
    );

    pdf.setFontSize(10);
    pdf.text("Issued by Blood Bank Authority", 105, 170, { align: "center" });

    pdf.save(`Blood_Donation_Certificate_${cert.id}.pdf`);
  };

  return (
    <div className="cert-grid">
      {certificates.map((cert) => (
        <div key={cert.id} className="certificate">
          <div className="cert-id">#{cert.id}</div>
          <div className="cert-header">
            <div className="cert-icon">🏅</div>
            <h4>Blood Donation Certificate</h4>
          </div>

       
          <div className="cert-details">
            <div className="cert-row">
              <span>Donation Date:</span>
              <span>{cert.date}</span>
            </div>

            <div className="cert-row">
              <span>Blood Group:</span>
              <span>{cert.bloodGroup}</span>
            </div>

            <div className="cert-row">
              <span>Units:</span>
              <span>{cert.units}</span>
            </div>

            <div className="cert-row">
              <span>Location:</span>
              <span>{cert.location}</span>
            </div>
          </div>

     
          <button
            className="btn primary"
            onClick={() => downloadCertificate(cert)}
          >
            🡻 Download Certificate
          </button>
        </div>
      ))}
    </div>
  );
}
