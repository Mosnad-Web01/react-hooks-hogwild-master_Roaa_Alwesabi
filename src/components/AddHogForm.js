import React, { useState } from 'react';

function AddHogForm({ addHog }) {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState(0);
  const [greased, setGreased] = useState(false);
  const [image, setImage] = useState('');
  const [medal, setMedal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      image,
      'highest medal achieved': medal,
    };
    addHog(newHog);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label>
        Greased:
        <input
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </label>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Highest Medal"
        value={medal}
        onChange={(e) => setMedal(e.target.value)}
      />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
