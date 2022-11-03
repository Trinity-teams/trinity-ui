import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

// imports icons
import { FaRegEdit } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineFileUpload } from 'react-icons/md';

const SubRuta = () => {
  const elements = [
    {
      text: 'Galletas',
      cover: 'https://images.unsplash.com/photo-1666932999928-f6029c081d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      href: '/subruta/details',
      isUpload: true
    },
    {
      text: 'Cocaleta',
      cover: 'https://images.unsplash.com/photo-1667361301508-b6bf3791685b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      href: '/subruta/details',
      isUpload: false
    }

  ]
  const [active, setActive] = useState(50);
  return (
    <div className='flex'>
      <div className='flex flex-col text-white p-2 pb-0 h-screen justify-between w-[300px] rounded-r-2xl'>
        <div className=' justify-between font-semibold py-3 flex items-center gap-x-2'>
          <h1>Products</h1>
          <div className='btn-plane text-sm'>
            <FaRegEdit />
            <span>Add New</span>
          </div>
        </div>
        <ul className='flex flex-col gap-y-2 flex-1 overflow-y-auto scrollbar-hide'>
          {elements.map((item, index) => (
            <Link
              key={index}
              to={`${item.href}`}
              onClick={() => setActive(index)}
              className={`${active === index ? 'brand-gradient' : 'bg-gray-800  hover:bg-gray-700'} cursor-pointerborder-gray-200/50 p-2 rounded-md`}>
              <div className='flex justify-between items-center gap-x-2'>
                <img className='w-8 h-8 rounded-md' src={item.cover} alt="" />
                <span className='flex-1'>{item.text}</span>
                <div className='relative group'>
                  <MdOutlineFileUpload className={`${item.isUpload ? `${active === index ? 'text-white' : 'text-blue-500'}` : 'text-gray-400'} `} />
                  <span className='text-xs group-hover:flex hidden absolute bg-white border p-1 rounded-md right-0'>Published</span>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex-1 '>
        <Outlet />
      </div>
    </div>
  )
}

export default SubRuta