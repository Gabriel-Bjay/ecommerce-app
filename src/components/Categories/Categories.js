import React from 'react'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ChairAltOutlinedIcon from '@mui/icons-material/ChairAltOutlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import DeskOutlinedIcon from '@mui/icons-material/DeskOutlined';
import TableBarOutlinedIcon from '@mui/icons-material/TableBarOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import PortraitIcon from '@mui/icons-material/Portrait';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import "./Categories.css"

const Categories = () => {
  return (
    <div className='categories-container'>
      <h2>Shop By Categories</h2>
      <p>Start exploring by choosing any furniture categories</p>

      <div className='categories-list'>
        <div className='category'>
            <ChairOutlinedIcon className='icon' />
            <p>Sofas</p>
        </div>
        <div className='category'>
            <ChairAltOutlinedIcon className='icon' />
            <p>Chairs</p>
        </div>
        <div className='category'>
            <TableRestaurantOutlinedIcon className='icon' />
            <p>Tables</p>
        </div>
        <div className='category'>
            <KitchenOutlinedIcon className='icon' />
            <p>Storages</p>
        </div>
        <div className='category'>
            <DeskOutlinedIcon className='icon' />
            <p>Desks</p>
        </div>
        <div className='category'>
            <TableBarOutlinedIcon className='icon' />
            <p>Side Tables</p>
        </div>
        <div className='category'>
            <BedOutlinedIcon className='icon' />
            <p>Side Tables</p>
        </div>
        <div className='category'>
            <PortraitIcon className='icon' />
            <p>Side Tables</p>
        </div>
      </div>

      <div className='location-categories'>

        <div className='room'>
            <h5>Curate the best <br/>dining area</h5>
            <p>From dining tables,chairs,<br/>sideboards and more</p>
            <button>Dining Room</button>
            <div className='demo-image'>
                <img
                src=''
                alt=''
                className=''
                />
            </div>
        </div>

        <div className='room'>
            <h5>Style your cozy <br/>living room</h5>
            <p>From sofas,coffee tables,side<br/> tables cabinets and more</p>
            <button>Living Room</button>
            <div className='demo-image'>
                <img
                src=''
                alt=''
                className=''
                />
            </div>
        </div>

        <div className='room'>
            <h5>Make your bedroom <br/>comfortable</h5>
            <p>From bedframes, mattresses,<br/> bedside tables, and more</p>
            <button>Bedroom</button>
            <div className='demo-image'>
                <img
                src=''
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
