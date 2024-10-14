import React from 'react';
import "../css/style.css";

const Filter = ({ searchTerm, setSearchTerm, minDate, setMinDate, maxDate, setMaxDate }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMinDateChange = (e) => {
    setMinDate(e.target.value);
  };

  const handleMaxDateChange = (e) => {
    setMaxDate(e.target.value);
  };

  return (
    <div className="filter-container">
      <div className="filter-row">
        <label htmlFor="filter" className="filter-label">Filter:</label>
        <input
          type="text"
          id="filter"
          className="textbox"
          placeholder="Last Name, First Name, Age, or Course"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="date-filters">
        <div className="date-filter">
          <label htmlFor="minDate">Min Date:</label>
          <input type="date" id="minDate" value={minDate} onChange={handleMinDateChange} />
        </div>
        <div className="date-filter">
          <label htmlFor="maxDate">Max Date:</label>
          <input type="date" id="maxDate" value={maxDate} onChange={handleMaxDateChange} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
