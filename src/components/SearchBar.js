import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={(props.sortedBy === 'alpha') ? true : false} onChange={() => props.sortBy('alpha')}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={(props.sortedBy === 'price') ? true : false} onChange={() => props.sortBy('price')}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.handleSort(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
