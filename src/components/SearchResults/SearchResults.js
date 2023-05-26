import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default SearchResults;
