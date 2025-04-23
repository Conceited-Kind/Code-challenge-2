import PropTypes from 'prop-types';

const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function FilterBar({ onFilter, activeFilters }) {
  return (
    <div className="filter-bar">
      <h3>Filter by Class:</h3>
      <div className="filter-buttons">
        {classes.map(cls => (
          <button
            key={cls}
            onClick={() => onFilter(cls)}
            className={activeFilters.includes(cls) ? 'active' : ''}
          >
            {cls}
          </button>
        ))}
      </div>
    </div>
  );
}

FilterBar.propTypes = {
  onFilter: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FilterBar;