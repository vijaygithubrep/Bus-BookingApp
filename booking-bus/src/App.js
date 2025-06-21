import React, { useState, useEffect } from "react";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import "./components/BookingForm.css";

export default function App() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored = localStorage.getItem("busBookings");
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("busBookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleAddBooking = (newBooking) => {
    setBookings((prev) => [...prev, newBooking]);
  };

  const handleDelete = (index) => {
    setBookings((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index, updatedBooking) => {
    setBookings((prev) =>
      prev.map((booking, i) => (i === index ? updatedBooking : booking))
    );
  };

  return (
    <div className="container">
      <h1> Bus Booking</h1>

      <div className="filter">
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Bus 1</option>
          <option>Bus 2</option>
          <option>Bus 3</option>
        </select>
      </div>

      <BookingForm onAddBooking={handleAddBooking} />
      <BookingList
        bookings={bookings}
        filter={filter}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}
