import React from 'react'
import './Valebeck.css'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
const Valebeck = () => {
  return (
      <div>
          <div className='valebeck-collection'>
          <h4>Urban Basic Collection</h4>
          <p>Designed and created by Urban Livin. The <strong><em>Urban Basic Collection</em></strong> is the essential group of furniture to bring you an aesthetic and minimal home lifestyle to your home who admire the concept of Japanese minimalism. This collection is inspired by the traditional Japanese aesthetic and modern Japanese minimalistic style.</p>

          <div className='collection'>
            <div className='collection-item'>
              <img src='https://neolivin.com/wp-content/uploads/2022/06/1-2-2-768x768-optimized.png ' alt='' className='collection-item-image'/>
              <div className='overlay'>
                <SaveAltIcon/>
                <p>Save</p>
              </div>
            </div>
            <div className='collection-item'>
              <img src='https://neolivin.com/wp-content/uploads/2022/06/38-2-2-680x680-optimized.png ' alt='' className='collection-item-image'/>
              <div className='overlay'>
                <SaveAltIcon/>
                <p>Save</p>
              </div>
            </div>
            <div className='collection-item'>
              <img src='https://neolivin.com/wp-content/uploads/2022/06/26-680x680-optimized.png' alt='' className='collection-item-image'/>
              <div className='overlay'>
                <SaveAltIcon/>
                <p>Save</p>
              </div>
            </div>
            <div className='collection-item'>
              <img src='https://neolivin.com/wp-content/uploads/2022/06/7-1-2-680x680-optimized.png' alt='' className='collection-item-image'/>
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

export default Valebeck
