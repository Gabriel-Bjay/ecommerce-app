import React from 'react'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ChairAltOutlinedIcon from '@mui/icons-material/ChairAltOutlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import TableBarOutlinedIcon from '@mui/icons-material/TableBarOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import "./Categories.css"
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories-container'>
      <h2>Shop By Categories</h2>
      <p>Start exploring by choosing any furniture categories</p>

      <div className='categories-list'>
        <Link to='/sofas'>
            <div className='category'>
                <ChairOutlinedIcon className='icon' />
                <p>Sofas</p>
            </div>
        </Link>
        <Link to='/chairs'>
            <div className='category'>
                <ChairAltOutlinedIcon className='icon' />
                <p>Chairs</p>
            </div>
        </Link>
        <Link to='/tables'>
            <div className='category'>
                <TableRestaurantOutlinedIcon className='icon' />
                <p>Tables</p>
            </div>
        </Link>
        <Link to='/kitchen'>
            <div className='category'>
                <KitchenOutlinedIcon className='icon' />
                <p>Storages</p>
            </div>
        </Link>

        <Link to='/tables'>
            <div className='category'>
                <TableBarOutlinedIcon className='icon' />
                <p>Side Tables</p>
            </div>
        </Link>
      </div>

      <div className='location-categories'>

        <div className='room1'>
            <div className='room1-description'>
                <h5 className='room1-text'>Curate the best <br/>dining area</h5>
                <p>From dining tables,chairs,<br/>sideboards and more</p>
                <button className='room1-btn'>Dining Room</button>
            </div>
            <div className='demo-image'>
                <img
                src='data:image/jpeg;base64,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'
                alt=''
                className=''
                />
            </div>
        </div>

        <div className='room1'>
        <div className='room1-description'>
            <h5 className='room1-text'>Style your cozy <br/>living room</h5>
            <p>From sofas,coffee tables,side<br/> tables cabinets and more</p>
            <button className='room1-btn'>Living Room</button>
        </div>
            <div className='demo-image'>
                <img
                src='data:image/jpeg;base64,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'
                alt=''
                className=''
                />
            </div>
        </div>

        <div className='room1'>

        <div className='room1-description'>
            <h5 className='room1-text'>Make your bedroom <br/>comfortable</h5>
            <p>From bedframes, mattresses,<br/> bedside tables, and more</p>
            <button className='room1-btn'>Bedroom</button>
        </div>
            <div className='demo-image'>
                <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3MMRM8bY1q9wRfLnSZTVMGXF6-cvZbK_AQ&usqp=CAU'
                alt=''
                className=''
                />
            </div>
        </div>
      </div>
      <div className='conditions'>
            <div className='authentic'>
                <CheckCircleOutlinedIcon/>
                <div className=''>
                    <h4>Authentic Brands</h4>
                    <p>Homegrown Brands</p>
                </div>
            </div>
            <div className='authentic'>
                <OutlinedFlagIcon/>
                <div className=''>
                    <h4>Locally Made</h4>
                    <p>Made In Kenya</p>
                </div>
            </div>
            <div className='authentic'>
                <ViewInArOutlinedIcon/>
                <div className=''>
                    <h4>Export Quality</h4>
                    <p>High-Quality Standards</p>
                </div>
            </div>
            <div className='authentic'>
                <ShieldOutlinedIcon/>
                <div className=''>
                    <h4>Best Protection</h4>
                    <p>Warranty And Protection Plans</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories
