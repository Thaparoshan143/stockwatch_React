import SearchBar from "../components/SearchBar"

const Home : React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly items-center min-h-[100vh] bg-[#948a9f] text-white w-[100%]">
        {/* <h1 className="text-theme text-6xl font-bold">Stockwatch</h1> */}
        <SearchBar />
    </div>
  )
}

export default Home