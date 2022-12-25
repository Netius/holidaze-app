import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminPage from "../admin/admin-page";
import ContactPage from "../contact/contact-page";
import ErrorPage from "../error/error-page";
import HomePage from "../home/home-page";
import HotelsPage from "../hotels/hotels-page";
import LoginPage from "../login/login-page";

function NavigationBar() {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
				<div className="container-fluid">
					<Link className="fs-3 navbar-brand navbar__logo" title="Holidaze" to="/">
						Holidaze
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<Link className="nav-link" title="See our hotels" to="/hotels">
									Hotels
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" title="Contact us" to="/contact">
									Contact us
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" title="Login for administrator" to="/login">
									Login
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Routes>
				<Route exact="true" path="/hotels" element={<HotelsPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="*" element={<ErrorPage to="/" />} />
			</Routes>
		</Router>
	);
}

export default NavigationBar;
