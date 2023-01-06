import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";
import LoginForm from "./login-form";

function LoginPage() {
	const [auth, setAuth] = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (auth) navigate("/admin");
	});

	return (
		<div className="container-fluid text-center">
			<Heading header={"Login"} />
			<LoginForm />
		</div>
	);
}

export default LoginPage;
