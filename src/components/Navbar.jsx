import { routes } from "../router/routes";
import { Link, useLocation } from "react-router-dom";
import { useUiStore } from "../store/uiStore"; // Import the store
import { SocialLinks } from "./common/SocialLinks";

const Navbar = () => {
	const { navbarDropdown, toggleNavbarDropdown, closeAllDropdowns } = useUiStore();
	const location = useLocation();

	return (
		<div className="container mx-auto">
			<nav className="flex items-center py-4 mb-4 sm:rounded-full z-10 justify-between">
				<h1 className="w-16">
					<img className="invert" src="/NbPortfolioLogo.png" alt="Logo" />
				</h1>
				<ul className="hidden md:flex w-9/12 md:w-6/12 justify-end ms-auto">
					{routes
						.filter((route) => route.id)
						.map((route) => (
							<li key={route.id} className="px-2">
								<Link
									to={route.path}
									className={`hover:text-gray-500 ${location.pathname === route.path ? "text-gray-500" : ""
										}`}
								>
									{route.label}
								</Link>
							</li>
						))}
				</ul>
				<SocialLinks className="hidden md:flex w-2/12 justify-end space-x-5 ms-4" />

				{/* Bottone menu per mobile */}
				<button className="md:hidden" onClick={toggleNavbarDropdown}>
					{navbarDropdown ? (
						<i className="fa-solid fa-x text-2xl"></i>
					) : (
						<i className="fa-solid fa-bars text-2xl"></i>
					)}
				</button>

				{/* Dropdown menu visibile su mobile */}
				{navbarDropdown && (
					<div className="absolute left-0 top-full w-full bg-sky-900 text-white md:hidden p-4 rounded-b-lg shadow-lg border-t border-t-black">
						<ul className="space-y-2">
							{routes.map(
								(route) =>
									route.id && (
										<li key={route.id}>
											<Link
												to={route.path}
												onClick={closeAllDropdowns}
												className={`text-center block py-2 px-4 hover:bg-sky-700 ${location.pathname === route.path
													? "text-grey-700"
													: ""
													}`}
											>
												{route.label}
											</Link>
										</li>
									)
							)}
							<li>
								<SocialLinks className="flex w-2/12 justify-end space-x-4" />
							</li>
						</ul>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
