import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"

const Explore : React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly items-center min-h-[100vh] bg-theme-bg text-white w-[100%]">
        <h1 className="text-theme text-8xl font-bold h-[10rem]">Explore</h1>
        <SearchBar />
    </div> 
  )
}

export default Explore