import { Outlet, Link } from "react-router-dom";

function Layout() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/makingof">Making Of</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</div>
	);
}

export default Layout;
