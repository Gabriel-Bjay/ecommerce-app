import React from 'react'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ChairAltOutlinedIcon from '@mui/icons-material/ChairAltOutlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import DeskOutlinedIcon from '@mui/icons-material/DeskOutlined';
import TableBarOutlinedIcon from '@mui/icons-material/TableBarOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import PortraitIcon from '@mui/icons-material/Portrait';
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
    </div>
  )
}

export default Categories
