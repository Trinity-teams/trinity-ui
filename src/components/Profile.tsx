import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (

    <button onClick={() => setIsOpen(!isOpen)} className=' bg-gray-900/70 flex flex-col gap-y-4 hover:bg-gray-900 p-2 rounded-md '>
      <div className='flex items-center gap-x-2'>
        <img className='w-10 h-10 flex rounded-full object-cover border-2' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
        <div className='truncate flex-1'>
          <span className='text-sm'>Peter Ramirez</span>
        </div>
        <MdOutlineKeyboardArrowDown />
      </div>
      {isOpen &&
        <div className='text-sm w-full flex flex-col'>
          <span className='hover:bg-gray-800 p-2 rounded-md flex'>Option 1</span>
          <span className='hover:bg-gray-800 p-2 rounded-md flex'>Option 2</span>
        </div>}
    </button>

  )
}

export default Profile