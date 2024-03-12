import React, { useState } from "react";

const FilterComponent = ({ onFilter, colors }) => {
  const [privacy, setPrivacy] = useState("all");
  const [color, setColor] = useState("any");
  const [hasFriends, setHasFriends] = useState(false);

  const handleFilter = () => {
    onFilter(privacy, color, hasFriends);
  };

  return (
    <div>
      <label>
        Приватность группы:
        <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
          <option value="all">Все</option>
          <option value="closed">Закрытая</option>
          <option value="open">Открытая</option>
        </select>
      </label>

      <label>
        Цвет аватарки:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="any">Любой</option>
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
        С друзьями:
        <input
          type="checkbox"
          checked={hasFriends}
          onChange={() => setHasFriends(!hasFriends)}
        />
      </label>

      <button onClick={handleFilter}>Применить фильтры</button>
    </div>
  );
};

export default FilterComponent;
