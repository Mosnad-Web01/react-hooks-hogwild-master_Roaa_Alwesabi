import React from 'react';

function Sort({ setSortBy }) {
  return (
    <div>
      <label>
        Sort By:
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default Sort;
