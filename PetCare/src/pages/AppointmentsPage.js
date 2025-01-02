import React, { useState } from 'react';

function AppointmentPage() {
  const [appointments, setAppointments] = useState([
    { id: 1, petName: 'Buddy', date: '2025-02-10', time: '10:00 AM' },
    { id: 2, petName: 'Max', date: '2025-02-12', time: '2:00 PM' },
  ]);

  return (
    <div>
      <h1>Appointment Page</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.petName} - {appointment.date} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentPage;
