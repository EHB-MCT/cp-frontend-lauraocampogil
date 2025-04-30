import { Outlet, Link } from "react-router-dom";

const Layout2 = () => {
	return (
		<>
			<nav>
				<ul>
					<Link to="/">Terug naar Home</Link>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};
export default Layout2;
