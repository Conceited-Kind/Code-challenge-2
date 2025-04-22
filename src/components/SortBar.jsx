import React from 'react';

const sortOptions = [
  { key: 'health', label: 'Health' },
  { key: 'damage', label: 'Damage' },
  { key: 'armor', label: 'Armor' }
];

function SortBar({ onSort, currentSort }) {
  return (
    <div className="sort-bar">
      <h3>Sort by:</h3>
      <div className="sort-buttons">
        {sortOptions.map(option => (
          <button
            key={option.key}
            onClick={() => onSort(option.key)}
            className={currentSort === option.key ? 'active' : ''}
          >
            {option.label}
            {currentSort === option.key && ' ↓'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SortBar;