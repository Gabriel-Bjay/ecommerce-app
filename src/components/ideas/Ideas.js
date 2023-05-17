import React from 'react'
import "./Ideas.css"
import { Save } from '@mui/icons-material'

const Ideas = () => {
  return (
    <div className='ideas-container'>
      <div className='ideas-body'>
        <img src='https://www.innovationsofabeds.com.au/wp-content/uploads/2015/02/SPLITBACK-FREJ-SOFA-EIK-CHAIR-521-MIXED-DANCE-GREY-1.jpg'
        alt='Idea'
        className='ideas-img'/>
        <div className='ideas-text'>
            <h3 className='idea-text'>Furniture ideas & inspirations <br/> for your home</h3>
        </div>
      </div>

      <div className='inspirations'>
        <h2>Latest Inspirations</h2>
        <div className='inspiration-container'>
            <div className='inspiration'>
                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LS6DNNJUEjrulFDw2W2oPCF-_wZNouPxZw&usqp=CAU'alt=''className='inspiration-image'/>
                 <h4>Living Room</h4>
                <Save/>

            </div>
            <div className='inspiration'>
                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtcA8fEjb_7yPidqIkD7IpyEWnGMjgBaaLWksv_pBhm5IPMoaqEZoSnToGpBA5LNHl94&usqp=CAU'alt=''className='inspiration-image'/>
                 <h4>Looking for a bedroom idea? <br/>don't worry we got you!</h4>
                <Save/>

            </div>
            <div className='inspiration'>
                <img src='https://i.pinimg.com/736x/43/7a/91/437a9178ce350537b9d3c3aa1cae66ed.jpg'alt=''className='inspiration-image'/>
                <h4>If you're looking for a comfortable working space Idea, this one is for you</h4>
                <Save/>

            </div>
            <div className='inspiration'>
                <img src='https://cdn.autonomous.ai/static/upload/images/new_post/aesthetics-personal-home-office-3536-1639125433964.jpg'alt=''className='inspiration-image'/>
                <h4>This is also another cool working space idea</h4>
                <Save/>

            </div>
            <div className='inspiration'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8iluCJFz7yDpzuGT6gUt6lg96rbSwwqxwA&usqp=CAU'alt=''className='inspiration-image'/>
                <h4>No one can resist the beauty of natural oak wood grain on this dining table</h4>
                <Save/>

            </div>
            <div className='inspiration'>
                <img src='https://cdn.decoist.com/wp-content/uploads/2017/06/This-stunning-dining-room-is-all-about-gold-A-royal-dining-experience.jpg'alt=''className='inspiration-image'/>
                <h4>Dining set</h4>
                <Save/>
            </div>            
        </div>
      </div>
    </div>
  )
}
 
export default Ideas
