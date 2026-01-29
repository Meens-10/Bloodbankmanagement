import React, { useState } from 'react';
import './appointment.css';

const Appointments = () => {
  const [activeTab, setActiveTab] = useState('appointments');

  return (
    <div className="appointments-page">
    
     
      <div className="alert-box">
        <div className="alert-icon">✓</div>
        <div className="alert-content">
          <p className="alert-title">You're Eligible to Donate!</p>
          <p className="alert-text">It's been more than 3 months since your last donation. Book an appointment below.</p>
        </div>
      </div>

      <div className="booking-section">
        <h2 className="section-title">Book New Appointment</h2>
        
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Location</label>
            <select className="form-select">
              <option>Central Blood Bank</option>
              <option>City Hospital</option>
              <option>Regional Medical Center</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Donation Type</label>
            <select className="form-select">
              <option>Whole Blood</option>
              <option>Plasma</option>
              <option>Platelets</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Preferred Date</label>
            <input type="date" className="form-input" placeholder="dd-mm-yyyy" />
          </div>

          <div className="form-group">
            <label className="form-label">Preferred Time</label>
            <select className="form-select">
              <option>09:00 AM - 10:00 AM</option>
              <option>10:00 AM - 11:00 AM</option>
              <option>11:00 AM - 12:00 PM</option>
              <option>02:00 PM - 03:00 PM</option>
              <option>03:00 PM - 04:00 PM</option>
            </select>
          </div>
        </div>

        <button className="book-button">Book Appointment</button>
      </div>

      <div className="appointments-section">
        <h2 className="section-title">Your Appointments</h2>

        <div className="appointment-card">
          <div className="appointment-header">
            <div className="status-badge confirmed">CONFIRMED</div>
            <div className="appointment-id">ID: APT001</div>
          </div>
          
          <div className="appointment-body">
            <div className="appointment-left">
              <div className="detail-item">
                <span className="detail-icon calendar-icon">📅</span>
                <span className="detail-text">2024-12-20</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon clock-icon">🕐</span>
                <span className="detail-text">10:00 AM</span>
              </div>
            </div>
            
            <div className="appointment-right">
              <div className="detail-item">
                <span className="detail-icon location-icon">📍</span>
                <span className="detail-text">Central Blood Bank</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon syringe-icon">💉</span>
                <span className="detail-text">Blood Donation</span>
              </div>
            </div>
          </div>

          <div className="appointment-actions">
            <button className="action-button reschedule">Reschedule</button>
            <button className="action-button cancel">Cancel</button>
          </div>
        </div>

        <div className="appointment-card">
          <div className="appointment-header">
            <div className="status-badge pending">PENDING</div>
            <div className="appointment-id">ID: APT002</div>
          </div>
          
          <div className="appointment-details">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <span className="detail-text">2024-12-28</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <span className="detail-text">City Hospital Camp</span>
            </div>
            <div className="detail-row">
              <span className="detail-icon">🕐</span>
              <span className="detail-text">02:00 PM</span>
            </div>
            <div className="detail-row">
              <span className="detail-icon">💉</span>
              <span className="detail-text">Blood Donation Camp</span>
            </div>
          </div>

          <div className="appointment-actions">
            <button className="action-button reschedule">Reschedule</button>
            <button className="action-button cancel">Cancel</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Appointments;