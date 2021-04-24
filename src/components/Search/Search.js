import './Search.css';
import React from 'react';

function Search(props) {

  const handleSearch = (e) => {
    props.searchTask(e.target.value);
  };

  return (
    <div className="searchWrapper">
      <form>
        <input
          placeholder="buscar tarea"
          className="search"
          type="text"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}

export default Search;
