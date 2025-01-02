import React, { useState } from 'react';
import './AddPet.css';

function AddPetPage() {
  const [petData, setPetData] = useState({
    name: '',
    age: '',
    type: '',
    breed: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yeni evcil hayvan verisini backend'e gönder
    console.log('New Pet Details:', petData);
  };

  return (
    <div className="add-pet-container">
      <h1>Add a Pet</h1>
      <form className="add-pet-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          value={petData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={petData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type (e.g., Dog, Cat)"
          value={petData.type}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={petData.breed}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}

export default AddPetPage;
