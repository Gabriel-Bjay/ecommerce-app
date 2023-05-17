import React from 'react'
import "./Footer.css"
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import { Facebook, Headphones, Instagram, ShieldMoonOutlined, ShoppingCart } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='contact-container'>
        <div className='shipping-delivery'>
            <ViewInArOutlinedIcon/>
            <p>Shipping And Delivery To West Malaysia</p>
        </div>
        <div className='shop'>
            <ShoppingCart/>
            <p>Interest-Free-Installment for 3 months via <strong>Atome</strong></p>
        </div>
        <div className='safety'>
            <ShieldMoonOutlined/>
            <p>Worry Free with Urban Living protection plan</p>
        </div>
        <div className='contact'>
            <Headphones/>
            <p>Ask Us Anything</p>
        </div>
      </div>

        <div className='description-container'>
        <div className='redirect-image'>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f0947d102336539.5f341d2eb6ca2.jpg'
                    alt=''
                    className='home-logo'/>
                <h6>Urban Livin'</h6>
                <div className='text'>
                    <p>DTC Online Furniture Platform
                    Furniture Shopping Redefined.</p>
                </div>
        </div>
        </div>

        <div className='location-container'>
            <div>
                <p>Blue Orchids Strt.Nrb</p>
                <p>P.O Box 555-55555555(1408474-4E)</p>
                <p>urbanlivin@outlolok.com</p>
            </div>
            <div className='socials'>
                <Instagram/>
                <Facebook/>
            </div>
        </div>

        <div className='end-footer'>
            <div className='left-footer'>
                <p>Copyright @2023 <strong>Urban Livin</strong> .All rights Reserved.</p>
            </div>
            <div className='right-footer'>
      
            </div>
        </div>
    </div>
  )
}

export default Footer
