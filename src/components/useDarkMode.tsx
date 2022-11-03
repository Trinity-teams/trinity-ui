import React, { useState } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"

const useDarkMode = () => {
    const [dark, setDark] = useState(false)
    return (
        <div>
            <button onClick={() => setDark(!dark)} className='mr-3 text-xl hover:bg-black/30 p-2 rounded-md'>
                {dark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
            </button>
        </div>
    )
}

export default useDarkMode