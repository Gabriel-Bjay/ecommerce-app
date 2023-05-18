import React from 'react'
import "./Japanese.css"
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const Japanese = () => {
  return (
    <div className='japanese-collection'>
      <h4>Urban Basic Collection</h4>
      <p>Designed and created by Urban Livin. The <strong><em>Urban Basic Collection</em></strong> is the essential group of furniture to bring you an aesthetic and minimal home lifestyle to your home who admire the concept of Japanese minimalism. This collection is inspired by the traditional Japanese aesthetic and modern Japanese minimalistic style.</p>

      <div className='collection'>
        <div className='collection-item'>
          <img src='https://neolivin.com/wp-content/uploads/2022/06/Product-Image-for-Website-JPG-7-768x768-optimized.png ' alt='' className='collection-item-image'/>
          <div className='overlay'>
            <SaveAltIcon/>
            <p>Save</p>
          </div>
        </div>
        <div className='collection-item'>
          <img src='https://neolivin.com/wp-content/uploads/2022/06/R1Copy-of-HTH02655-600x600-1-optimized.jpg ' alt='' className='collection-item-image'/>
          <div className='overlay'>
            <SaveAltIcon/>
            <p>Save</p>
          </div>
        </div>
        <div className='collection-item'>
          <img src='https://neolivin.com/wp-content/uploads/2022/06/Copy-of-HTH01888-1-600x600-1-optimized.jpeg ' alt='' className='collection-item-image'/>
          <div className='overlay'>
            <SaveAltIcon/>
            <p>Save</p>
          </div>
        </div>
        <div className='collection-item'>
          <img src='https://neolivin.com/wp-content/uploads/2022/06/Copy-of-HTH02009-768x768-optimized.jpg' alt='' className='collection-item-image'/>
          <div className='overlay'>
            <SaveAltIcon/>
            <p>Save</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Japanese
