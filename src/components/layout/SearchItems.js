import React from 'react'

const SearchItems = ({searchData}) => {
  return (
    <div>
      <h1>Items Page</h1>
      <div className="item-container">
      {searchData.map((val, key) => {
        return (
          <div key={key}>
            <img src={val.image} alt={val.name} />
            <p>{val.name}</p>
            <p>{val.price}</p>
            <p>{val.rating}</p>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default SearchItems
