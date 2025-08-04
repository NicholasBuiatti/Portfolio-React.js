import { routes } from "../router/routes";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useUiStore } from "../store/uiStore"; // Import the store
import { SocialLinks } from "./common/SocialLinks";

const Navbar = () => {
	const { navbarDropdown, toggleNavbarDropdown, closeAllDropdowns } = useUiStore();
	const location = useLocation();

	return (
		<div className="md:container relative mx-auto">
			<nav className="flex items-center p-4 justify-between">
				<h1 className="w-12">
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
					<i className={`fa-solid fa-bars text-2xl ${navbarDropdown ? "text-gray-500" : ""}`}></i>
				</button>

				{/* Dropdown menu visibile su mobile */}
				<AnimatePresence>
					{navbarDropdown && (
						<motion.div
							className="absolute left-0 top-full w-full z-50 py-4 shadow-lg bg-[#222] text-white md:hidden"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
							style={{ transformOrigin: "top" }}
						>
							<ul className="space-y-2">
								{routes.map(
									(route) =>
										route.id && (
											<li key={route.id} className="border-b border-gray-700">
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
									<SocialLinks className="flex justify-center space-x-6" />
								</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</div>
	);
};

export default Navbar;
