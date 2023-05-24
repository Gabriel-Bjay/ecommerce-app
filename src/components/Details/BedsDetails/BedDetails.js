import React from 'react'
import productDetails from '../../../productDetails.json'

const BedDetails = () => {

  const bedsDetails = productDetails.filter((product) => product.category === 'Beds');
  return (
    <div className='bedDetails-container'>
      {bedsDetails.map((bed)=>(
        <div key={bed.id}>
          <img src={bed.image} alt={bed.name} />
          <p>Price ${bed.price}</p>
          <p>Description {bed.description}</p>
        </div>
      ))
        
      }
    </div>
  )
}

export default BedDetails
