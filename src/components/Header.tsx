import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import ToggleDark from './ToggleDark'

// import componets

const Header = () => {

  return (
    <div className=' flex items-center justify-between brand-gradient w-full text-white p-3'>
      <span className=' font-extrabold flex-1'>TRINITY</span>
      <ToggleDark />
      <div className='flex items-center gap-x-2 '>
        <img className='w-10 h-10 rounded-full object-cover border-2' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
        <MdOutlineKeyboardArrowDown />
      </div>
    </div>
  )
}

export default Header