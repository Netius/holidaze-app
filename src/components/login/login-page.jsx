import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const [auth, setAuth] = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (auth) navigate("/admin");
	});

	return <>GGGGG</>;
}

export default LoginPage;
