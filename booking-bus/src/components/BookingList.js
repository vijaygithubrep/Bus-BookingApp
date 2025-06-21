import React, { useState } from "react";

export default function BookingList({ bookings, filter, onDelete, onEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  const filtered = filter === "All" ? bookings : bookings.filter(b => b.bus === filter);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedData(bookings[index]);
  };

  const handleSave = () => {
    onEdit(editIndex, editedData);
    setEditIndex(null);
  };

  return (
    <div className="list">
      <h2>Booking List</h2>
      {filtered.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        filtered.map((booking, i) => (
          <div key={i} className="booking-card">
            {editIndex === i ? (
              <>
                <input
                  value={editedData.name}
                  onChange={(e) =>
                    setEditedData({ ...editedData, name: e.target.value })
                  }
                />
                <input
                  value={editedData.email}
                  onChange={(e) =>
                    setEditedData({ ...editedData, email: e.target.value })
                  }
                />
                <input
                  value={editedData.phone}
                  onChange={(e) =>
                    setEditedData({ ...editedData, phone: e.target.value })
                  }
                />
                <select
                  value={editedData.bus}
                  onChange={(e) =>
                    setEditedData({ ...editedData, bus: e.target.value })
                  }
                >
                  <option>Bus 1</option>
                  <option>Bus 2</option>
                  <option>Bus 3</option>
                </select>
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <p>
                  <strong>{booking.name}</strong> ({booking.email}) – {booking.phone} –{" "}
                  <b>{booking.bus}</b>
                </p>
                <button className="delete" onClick={() => onDelete(i)}>Delete</button>
                <button onClick={() => handleEditClick(i)}>Edit</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
