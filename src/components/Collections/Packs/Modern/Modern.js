import React from 'react'
import "./Modern.css"
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const Modern = () => {
  return (
    <div>
      <div className='modern-collection'>
      <h4>Urban Basic Collection</h4>
      <p>Designed and created by Urban Livin. The <strong><em>Urban Basic Collection</em></strong> is the essential group of furniture to bring you an aesthetic and minimal home lifestyle to your home who admire the concept of Japanese minimalism. This collection is inspired by the traditional Japanese aesthetic and modern Japanese minimalistic style.</p>

      <div className='collection'>
        <div className='collection-item'>
          <img src='https://neolivin.com/wp-content/uploads/2023/05/74-768x768-optimized.jpg ' alt='' className='collection-item-image'/>
          <div className='overlay'>
            <SaveAltIcon/>
            <p>Save</p>
          </div>
        </div>
        <div className='collection-item'>
          <img src='https://neolivin.com/wp-content/uploads/2023/04/25-768x768-optimized.jpg ' alt='' className='collection-item-image'/>
          <div className='overlay'>
            <SaveAltIcon/>
            <p>Save</p>
          </div>
        </div>
        <div className='collection-item'>
          <img src='https://neolivin.com/wp-content/uploads/2023/04/574B2650-A43D-41ED-8113-758AF94B05A4-768x768-optimized.jpeg' alt='' className='collection-item-image'/>
          <div className='overlay'>
            <SaveAltIcon/>
            <p>Save</p>
          </div>
        </div>
        <div className='collection-item'>
          <img src='https://neolivin.com/wp-content/uploads/2023/04/37-1-768x768-optimized.jpg' alt='' className='collection-item-image'/>
          <div className='overlay'>
            <SaveAltIcon/>
            <p>Save</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modern
