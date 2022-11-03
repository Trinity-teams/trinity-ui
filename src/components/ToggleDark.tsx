import React, { useState, useEffect } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"

const ToggleDark = () => {
  const [dark, setDark] = useState(
    () => localStorage.theme === "light"
  )
  const toggleDarkMode = () => {
    setDark(!dark)
  }

  useEffect(() => {
    const html = window.document.documentElement;

    const prevTheme = dark ? 'light' : 'dark'
    html.classList.remove(prevTheme)

    const nextTheme = dark ? 'dark' : 'light'
    html.classList.add(nextTheme)

    localStorage.setItem("theme", nextTheme)
  }, [dark]);


  return (
    <div>
      <button onClick={toggleDarkMode} className='mr-3 text-xl hover:bg-black/30 p-2 rounded-md'>
        {dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  )
}

export default ToggleDark