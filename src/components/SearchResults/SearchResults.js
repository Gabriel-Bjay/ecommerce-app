import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../products.json';

const SearchResults = ({ category }) => {
  // Filter the items based on the selected category
  const filteredItems = data.filter((item) => item.category === category);

  console.log('Filtered Items:', filteredItems); // Log the filtered items

  return (
    <div>
      <h2>Search Results for Category: {category}</h2>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {/* Display relevant information for each search result */}
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            {/* Add a link to the individual item page */}
            <Link to={`/item/${item.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
