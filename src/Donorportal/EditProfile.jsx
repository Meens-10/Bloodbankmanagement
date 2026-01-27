import { useState } from "react";

export default function EditProfile({ donor, onSave, onCancel }) {
  const [form, setForm] = useState({ ...donor });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm({
        ...form,
        photo: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const today = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });

    onSave({
      ...form,
      lastDonation: today
    });
  };

  return (
    <div className="edit-page">
      <div className="edit-card">

        {/* LEFT SIDE */}
        <div className="edit-left">
          <div className="edit-card-inner">
            <h2 className="edit-title">Edit Profile</h2>
            <p className="edit-subtitle">
              Update your donor information
            </p>

            <div className="photo-upload">
              <div className="photo-frame">
                <img
                  src={form.photo}
                  alt="Profile"
                  className="profile-preview"
                />
              </div>

              <label className="upload-btn">
                Change Photo
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handlePhoto}
                />
              </label>

              <p className="upload-hint">
                JPG or PNG • Max size 5MB
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="edit-right">
          <div className="edit-form">

            <input
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              placeholder="Mobile Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            

            <select
              name="bloodGroup"
              value={form.bloodGroup}
              onChange={handleChange}
            >
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            <button className="btn primary full" onClick={handleSave}>
              Save Changes
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="btn danger full" onClick={onCancel}>
              Cancel
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
