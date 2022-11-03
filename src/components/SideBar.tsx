import React, { useState } from 'react'
import { IoLogOutOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom'
import Profile from './Profile';

const SideBar = () => {
    const elements = [
        {
            text: 'Categories',
            href: 'subruta'
        },
        {
            text: 'Offers',
            href: 'subruta'
        },
        {
            text: 'Products',
            href: 'subruta'
        },
        {
            text: 'Categories',
            href: 'subruta'
        },
        {
            text: 'Offers',
            href: 'subruta'
        },


    ]
    const [active, setActive] = useState(50);
    return (
        <div className='p-2 pb-0 h-screen text-white flex flex-col justify-between bg-black'>
            <span className=' mb-5 text-3xl bg-clip-text text-transparent w-fit font-extrabold brand-gradient '>TRINITY</span>

            {/* profile */}
            <Profile />
            <div className=' font-semibold flex items-center justify-between p-3  '>
                <span>Contents</span>
            </div>
            <ul className='flex text-sm flex-col gap-y-2 flex-1 overflow-y-auto scrollbar-hide'>
                {elements.map((item, index) => (
                    <Link
                        key={index}
                        to={`${item.href}`}
                        onClick={() => setActive(index)}
                        className={`${active === index ? 'brand-gradient  border-none' : 'bg-gray-800/30 hover:bg-gray-700'} cursor-pointer  p-2 px-3 rounded-md`}>
                        {item.text}
                    </Link>
                ))}
            </ul>
            <button className='my-10 flex items-center gap-x-2 hover:bg-gray-700 p-3 rounded-md'>
                <IoLogOutOutline />
                <span>Log Out</span>
            </button>
        </div>
    )
}

export default SideBar