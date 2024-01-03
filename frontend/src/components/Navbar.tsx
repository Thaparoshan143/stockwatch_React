import { Link } from "react-router-dom";
import { _NavItems } from "../assets/data/stockwatch";

interface INavItem {
	item : string,
	url : string,
};

const Navbar : React.FC = () => {
	const logoPath = require("../assets/images/logo.png");

  return (
	<nav className="flex flex-row items-center justify-between w-[100%] fixed z-20 p-2 bg-black">
		<img src={logoPath} alt={"logo"} className="w-[4rem] mx-8"/>
		<ul className="flex flex-row items-center justify-evenly w-[30%] text-theme-alt">
			{
				_NavItems.map(({item, url})=>
				{
					return <NavItem item={item} url={url} />
				})
			}
		</ul>
	</nav>
  )
}

const NavItem : React.FC<INavItem> = ({item, url}) =>
{
	return (
		<Link to={url} className="p-2 m-2 underline-offset-8 hover:underline hover:text-theme-alt text-xl transition-all duration-300 font-bold">{item}</Link>
	)
}

export default Navbar