import React from 'react';

function Filter({ setShowGreased }) {
  return (
    <div>
      <label>
        Show Greased
        <input
          type="checkbox"
          onChange={(e) => setShowGreased(e.target.checked)}
        />
      </label>
    </div>
  );
}

export default Filter;
