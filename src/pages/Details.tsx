import React, { useState } from 'react'

// imports icons
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { FiMoreVertical } from 'react-icons/fi';
import { MdOutlineFileUpload } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';
import Input from '../components/Input';

const Details = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex flex-col p-2 pb-0 h-screen border-r-2 bg-gray-900 border-l border-gray-800 text-white'>
      {/* header */}
      <div className=' justify-between font-semibold p-3  flex items-center gap-x-2'>
        <h1 className='flex-1 truncate'>Galletas</h1>
        <div className='btn'>
          <span>Publish</span>
          <MdOutlineFileUpload />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'bg-gray-800' : ''} relative cursor-pointer w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded-md`}>
          {isOpen ? <IoCloseOutline /> : <FiMoreVertical />}
          <div className={`${isOpen ? 'flex' : 'hidden'} absolute top-10 right-0`}>
            <ul className='text-sm font-normal divide-y divide-gray-700 bg-gray-800 border-2 border-gray-700 p-1 flex flex-col gap-y-1 w-[190px] rounded-md'>
              <li className='btn-plane bg-transparent rounded-none hover:rounded-md text-red-500'>
                <HiOutlineDocumentDuplicate />
                <span>Duplicate</span>
              </li>
              <li className='btn-plane bg-transparent rounded-none hover:rounded-md text-red-500'>
                <AiOutlineDelete />
                <span>Delete</span>
              </li>
              <li className='btn-plane bg-transparent rounded-none hover:rounded-md'>
                <MdOutlineFileUpload className=' rotate-180' />
                <span>Unpublish</span>
              </li>
              <li className='btn-plane bg-transparent rounded-none hover:rounded-md text-red-500'>
                <HiOutlineDocumentDuplicate />
                <span>Discard changes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* inputs */}
      <div className='p-10 flex flex-col gap-y-6 '>
        <Input type={'text'} label={"Title"} value={"Galleta"} />
        <Input type={'text'} label={"Phone Number"} value={"804-506-8497"} />
        <Input type={'number'} label={"Cantidad"} />
        <Input type={'file'} label={"Cantidad"} />
      </div>

    </div>
  )
}

export default Details