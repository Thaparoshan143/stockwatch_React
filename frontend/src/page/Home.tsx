import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"

const Home : React.FC = () => {
    const _mainText = "Stockwatch";
    const [mainText, setMainText] = useState<string>("");
    const [textCount, setTextCount] = useState<number>(-1);

    useEffect(()=>
    {
      let num = -1;
        setInterval(() =>
        {
          num++;
          num %= _mainText.length;
          setTextCount(num);
          console.log("Value " + mainText + " Count " + textCount);
        }, 400);

    },[])
    useEffect(()=>
    {
      setMainText(_mainText.substring(0, textCount+1)+(_mainText.substring(0, textCount+1)===_mainText?"":"_"));
    },[textCount])

  return (
    <div className="flex flex-col justify-evenly items-center min-h-[100vh] bg-theme-bg text-white w-[100%]">
        <h1 className="text-theme text-8xl font-bold h-[10rem]">{mainText}</h1>
        <SearchBar />
    </div>
  )
}

export default Home