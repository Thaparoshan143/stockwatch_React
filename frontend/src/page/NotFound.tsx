import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-[100vh] bg-black flex flex-col items-center justify-evenly text-white">
        <div className="p-2">
            <span className="block font-bold text-xl">Oops!</span>
            <span className="text-[15rem] font-bold">404</span>
        </div>
        <div className="p-2 flex flex-col justify-evenly items-center">
            <span className="block">Page Not found</span>
            <Link to="/" className="m-4 p-4 px-6 bg-theme hover:scale-[105%] transition-all duration-300 text-xl rounded-lg">Home</Link>
        </div>
    </div>
  )
}

export default NotFound