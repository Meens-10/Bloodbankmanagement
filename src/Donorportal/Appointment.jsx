import { useState } from "react";
// import "./donorportal.css";
export default function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      id: "APT001",
      status: "CONFIRMED",
      date: "2024-12-20",
      time: "10:00 AM",
      location: "Central Blood Bank",
      type: "Blood Donation"
    },
    {
      id: "APT002",
      status: "PENDING",
      date: "2024-12-28",
      time: "02:00 PM",
      location: "City Hospital Camp",
      type: "Blood Donation Camp"
    }
  ]);

  const [form, setForm] = useState({
    location: "Central Blood Bank",
    type: "Whole Blood",
    date: "",
    time: "09:00 AM - 10:00 AM"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleBook = () => {
    if (!form.date) {
      alert("Please select a preferred date");
      return;
    }

    const newAppointment = {
      id: `APT00${appointments.length + 1}`,
      status: "PENDING",
      date: form.date,
      time: form.time,
      location: form.location,
      type: form.type
    };

    setAppointments([newAppointment, ...appointments]);
    alert("Appointment booked successfully!");

    setForm({
      location: "Central Blood Bank",
      type: "Whole Blood",
      date: "",
      time: "09:00 AM - 10:00 AM"
    });
  };

  const cancelAppointment = (id) => {
    if (!window.confirm("Cancel this appointment?")) return;
    setAppointments(appointments.filter(a => a.id !== id));
  };

  return (
    <div className="tab-page">

      {/* ELIGIBILITY ALERT 
      <div className="alert success">
        <strong>✔ You're Eligible to Donate!</strong>
        <p>
          It's been more than 3 months since your last donation.
          Book an appointment below.
        </p>
      </div>*/}

      {/* BOOKING CARD */}
      <div className="card">
        <h3>Book New Appointment</h3>

        <div className="form-grid">
          <div>
            <label>Location</label>
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
            >
              <option>Central Blood Bank</option>
              <option>City Hospital Camp</option>
              <option>Community Camp</option>
            </select>
          </div>

          <div>
            <label>Donation Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <option>Whole Blood</option>
              <option>Platelets</option>
              <option>Plasma</option>
            </select>
          </div>

          <div>
            <label>Preferred Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Preferred Time</label>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
            >
              <option>09:00 AM - 10:00 AM</option>
              <option>10:00 AM - 11:00 AM</option>
              <option>02:00 PM - 03:00 PM</option>
            </select>
          </div>
        </div>

        <button className="btn primary" onClick={handleBook}>
          Book Appointment
        </button>
      </div>

      {/* APPOINTMENTS LIST */}
      <div className="card">
        <h3>Your Appointments</h3>

        {appointments.map((a) => (
          <div key={a.id} className="appointment">
            <div className="appointment-left">
              <span
                className={`status ${
                  a.status === "CONFIRMED" ? "confirmed" : "pending"
                }`}
              >
                {a.status}
              </span>

              <span>ID: {a.id}</span>
              <span>📅 {a.date}</span>
              <span>⏰ {a.time}</span>
              <span>📍 {a.location}</span>
              <span>🩸 {a.type}</span>
            </div>

            <div>
              <button className="btn">Reschedule</button>
              <button
                className="btn danger"
                onClick={() => cancelAppointment(a.id)}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
