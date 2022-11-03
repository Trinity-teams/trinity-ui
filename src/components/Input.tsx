import React from 'react'

// import icons
import { BiImages } from "react-icons/bi"
import { IoSearchOutline } from 'react-icons/io5'
import { MdOutlineFileUpload } from 'react-icons/md'

const Input = ({ type, label, value, array }: any) => {
  return (
    <div>
      <label className=' font-semibold text-sm' htmlFor="">{label}</label>
      {
        type === "file" ?
          <div className='px-8 h-20  relative bg-gray-800 flex gap-x-2 items-center  focus:outline-blue-500 rounded-md border w-full border-gray-700'>
            <input
              className=' absolute cursor-pointer inset-0 opacity-0'
              type={type}
              value={value} />
            <div className='text-sm flex items-center gap-x-2'>
              <BiImages />
              <span>Drag or paste image here</span>
            </div>
            <div className='flex items-center gap-x-2 absolute right-8'>
              <button className='btn-plane bg-gray-700'>
                <MdOutlineFileUpload />
                <span>Upload</span>
              </button>
              <button className='btn-plane bg-gray-700'>
                <IoSearchOutline />
                <span>Select</span>
              </button>
            </div>
          </div>

          :

          <input
            className='p-2 px-3 bg-gray-800  focus:outline-blue-500 rounded-md border w-full border-gray-700'
            type={type}
            value={value} />
      }

    </div>

  )
}

export default Input