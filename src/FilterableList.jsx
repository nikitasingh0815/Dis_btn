import React, { useState } from 'react';
import './FilterableList.css'; 

const FilterableList = () => {
  const items = ['java','python','C','C++','HTML','CSS','Javascript','php'];
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="filterable-list">
      <h3>CODING LANGUAGES</h3>
      <input
        type="text"
        placeholder="Search ur preferred language"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default FilterableList;
