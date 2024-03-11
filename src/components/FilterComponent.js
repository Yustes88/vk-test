import React, { useState } from "react";

const FilterComponent = ({ onFilter, colors }) => {
  const [privacy, setPrivacy] = useState("all");
  const [color, setColor] = useState("any");
  const [hasFriends, setHasFriends] = useState(false);

  const handleFilter = () => {
    onFilter(privacy, color, hasFriends);
  };

  console.log(colors);

  return (
    <div>
      <label>
        Privacy:
        <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
          <option value="all">All</option>
          <option value="closed">Closed</option>
          <option value="open">Open</option>
        </select>
      </label>

      <label>
        Avatar Color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="any">Any</option>
          {colors.map((color) => {
            return (
              <option key={color} value={color}>
                {color}
              </option>
            );
          })}
        </select>
      </label>

      <label>
        Has Friends:
        <input
          type="checkbox"
          checked={hasFriends}
          onChange={() => setHasFriends(!hasFriends)}
        />
      </label>

      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterComponent;
