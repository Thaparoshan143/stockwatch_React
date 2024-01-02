import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import "./App.css"
import NotFound from "./page/NotFound"
import ScriptPage from "./page/ScriptPage"


const App : React.FC = () => {
  return (
	<>
	<Navbar />
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/script" >
			<Route path=":id" element={<ScriptPage />}/>
		</Route>
		<Route path="*" element={<NotFound />}/>
	</Routes>
	<Footer />
	</>
  )
}

export default App