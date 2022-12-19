import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactPage from "../contact/contact-page";
import HotelsPage from "../hotels/hotels-page";
import LoginPage from "../login/login-page";

function NavigationBar() {
	return (
		<Router>
			<nav style={{ display: "flex", flexDirection: "column" }}>
				<Link to="/">Hotels</Link>
				<Link to="/contact">Contact us</Link> 
				<Link to="/login">Login</Link>
			</nav>
			<Routes>
				<Route path="/hotels" element={<HotelsPage />} />
				<Route path="/contact" element={<ContactPage />} /> 
				<Route path="/login" element={<LoginPage />} />
				{/* <Route path="*" element={<Error />} /> */}
			</Routes>
		</Router>
	);
}

export default NavigationBar;
