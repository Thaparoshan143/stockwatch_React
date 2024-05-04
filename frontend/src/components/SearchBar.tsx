import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SearchBar : React.FC = () => {
  const [inpURL, setInpURL] = useState<string>("");

  { console.log(inpURL) }

  return (
    <div className="w-[60%] flex flex-row justify-between items-center bg-white rounded-[2rem] overflow-hidden min-h-[3rem] h-[4rem]">
      <input type="text" className="h-[100%] px-8 outline-none w-[100%] text-theme text-xl" placeholder="Enter script name here..." onChange={(e)=>setInpURL(e.target.value)}/>
      <Link to={window.location.href + "script/" + inpURL} className="text-white bg-theme h-[100%] px-6">
        <FaSearch className="text-3xl h-[100%]" />
      </Link>
    </div>
  )
}

export default SearchBar