import React from 'react'
import './SearchItems.css'

const SearchItems = ({searchData}) => {
  return (
    <>
      <h1 className='search-header'>Items Page</h1>
      <div className='search-items'>
          {searchData.map((val, key) => {
            return (
              <div key={key} className='item'>
                <img src={val.image} alt={val.name} className='item-image' />
                <p>{val.name}</p>
                <p>$ {val.price}</p>
                <p>{val.rating}</p>
              </div>
            );
          })}
      </div>
    </>
  )
}

export default SearchItems
