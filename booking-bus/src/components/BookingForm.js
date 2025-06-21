import React, { useState } from "react";

export default function BookingForm({ onAddBooking }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bus: "Bus 1",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBooking(formData);
    setFormData({ name: "", email: "", phone: "", bus: "Bus 1" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label> Name:
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>  Email:
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>  Phone:
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>

      <label>  Bus:
        <select name="bus" value={formData.bus} onChange={handleChange}>
          <option>Bus 1</option>
          <option>Bus 2</option>
          <option>Bus 3</option>
        </select>
      </label>

      <button type="submit">Book</button>
    </form>
  );
}
