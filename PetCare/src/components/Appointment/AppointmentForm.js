import React, { useState } from 'react';
import './Appointment.css';

function AppointmentForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        petName: '',
        ownerName: '',
        date: '',
        time: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="appointment-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="petName"
                placeholder="Pet Name"
                value={formData.petName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="ownerName"
                placeholder="Owner Name"
                value={formData.ownerName}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
            <button type="submit">Create Appointment</button>
        </form>
    );
}

export default AppointmentForm;
