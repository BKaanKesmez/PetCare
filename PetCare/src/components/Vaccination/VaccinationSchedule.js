import React, { useState } from 'react';
import './Vaccination.css';

function VaccinationSchedule() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const availableDates = ['2025-02-10', '2025-02-12', '2025-02-14'];
    const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

    const handleConfirm = () => {
        if (selectedDate && selectedTime) {
            setConfirmationMessage(
                `Appointment confirmed for ${selectedDate} at ${selectedTime}. Thank you for keeping your pet healthy!`
            );
        } else {
            alert('Please select a date and time.');
        }
    };

    return (
        <div className="vaccination-container">
            <h1>Vaccination Schedule</h1>
            <div className="vaccination-selection">
                <div>
                    <h3>Select a Date:</h3>
                    <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    >
                        <option value="">-- Select Date --</option>
                        {availableDates.map((date, index) => (
                            <option key={index} value={date}>
                                {date}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <h3>Select a Time:</h3>
                    <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                    >
                        <option value="">-- Select Time --</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button className="confirm-button" onClick={handleConfirm}>
                Confirm Appointment
            </button>
            {confirmationMessage && (
                <div className="confirmation-message">{confirmationMessage}</div>
            )}
        </div>
    );
}

export default VaccinationSchedule;
