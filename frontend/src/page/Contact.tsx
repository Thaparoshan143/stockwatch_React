import { useEffect, useState } from "react"

const Contact : React.FC = () => {

  return (
    <div className="flex flex-col justify-evenly items-center min-h-[100vh] bg-theme-bg text-white w-[100%]">
        <h1 className="text-theme text-8xl font-bold h-[10rem]">Contact</h1>
        <div className="h-[10rem] flex flex-col justify-evenly items-center">
          <h1 className="text-theme text-5xl font-bold">Developed by</h1>
          <span className="text-3xl">Roshan Thapa</span>
          <b><a href="mailto:thaparoshan3722@gmail.com">connect</a></b>
        </div>
    </div> 
  )
}

export default Contact