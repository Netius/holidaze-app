import React from "react";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../../common/form-error";
import FormWarning from "../../common/form-warning";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import SpinnerLoading from "../../common/spinner-loading";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LoginForm() {
	const url = BASE_URL + TOKEN_PATH;

	const schema = yup.object().shape({
		username: yup.string().required("Please enter your username"),
		password: yup.string().required("Please enter your password"),
	});

	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const [auth, setAuth] = useContext(AuthContext);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		console.log(data);
		setSubmitting(true);
		setLoginError(null);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			navigate("/admin");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.message.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="login__container container-sm mt-5">
				<div className="form-group">
					<fieldset disabled={submitting}>
						<input
							className="mt-3 form-control"
							name="username"
							placeholder="Username"
							{...register("username", { required: true })}
						/>
						{errors.username && <FormWarning>{errors.username.message}</FormWarning>}

						<input
							className="mt-3 form-control"
							name="password"
							placeholder="Password"
							type="password"
							{...register("password", { required: true })}
						/>

						{errors.password && <FormWarning>{errors.password.message}</FormWarning>}
						<button className="px-5 mt-3 btn btn-primary" type="submit">
							{submitting ? "Logging" : "Login"} {submitting && <SpinnerLoading />}
						</button>
					</fieldset>
				</div>
				{loginError && <FormError>{loginError}</FormError>}
			</form>
		</>
	);
}
export default LoginForm;
