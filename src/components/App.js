import React, { useState } from 'react';
import porkerData from '../porkers_data';
import HogTile from './HogTile';
import Filter from './Filter';
import Sort from './Sort';
import AddHogForm from './AddHogForm';

function App() {
  const [hogs, setHogs] = useState(porkerData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState('name');

  // تصفية الخنازير بناءً على الخيار المحدد (مشهونة أو غير مشهونة)
  const filteredHogs = hogs.filter(hog => (showGreased ? hog.greased : true));

  // ترتيب الخنازير بناءً على الاسم أو الوزن
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'weight') return a.weight - b.weight;
  });

  // وظيفة لإضافة خنزير جديد إلى القائمة
  const addHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  return (
    <div className="Container">
      {/* مكون التصفية */}
      <Filter setShowGreased={setShowGreased} />

      {/* مكون الترتيب */}
      <Sort setSortBy={setSortBy} />

      {/* مكون إضافة خنزير جديد */}
      <AddHogForm addHog={addHog} />

      {/* عرض الخنازير المصفاة والمرتبة */}
      <div className="ui grid container">
        {sortedHogs.map(hog => (
          <HogTile key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;
