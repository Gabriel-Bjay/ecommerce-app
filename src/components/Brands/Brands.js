import React from 'react'
import "./Brands.css"

const Brands = () => {
  return (
    <>
        <h3>Our brands</h3>
    <div className='brands-collection'>
      <div className='brand'>
        <img src='https://i1.sndcdn.com/avatars-7oLLox9QpfEF8yzV-zFvh5A-t500x500.jpg'
        alt=''
        className='brand-image'/>
      </div>
      <div className='brand'>
      <img src='https://i.pinimg.com/originals/e4/12/65/e41265a4bc6c90d691e04ec984ef6d04.jpg'
        alt=''
        className='brand-image'/>
      </div>
      <div className='brand'>
      <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/rufjcpa8h0gxec5gjcow'
        alt=''
        className='brand-image'/>
      </div>
      <div className='brand'>
      <img src='https://idme-marketplace.s3.amazonaws.com/5k20eiak1lmwxda1vczlzp8buy0k'
        alt=''
        className='brand-image'/>
      </div>
    </div>
    </>
  )
}

export default Brands
