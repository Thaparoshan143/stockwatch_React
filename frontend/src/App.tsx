import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import "./App.css"


const App : React.FC = () => {
  return (
	<>
	<Navbar />
	<Routes>
		<Route path="/" element={<Home />} />
	</Routes>
	<Footer />
	</>
  )
}

export default App