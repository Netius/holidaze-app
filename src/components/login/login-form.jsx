import React from "react";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../../common/form-error";
import FormWarning from "../../common/form-warning";
import { AUTH_URL } from "../../constants/api";
import SpinnerLoading from "../../common/spinner-loading";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SubHeading from "../../common/subheading";

function LoginForm() {
	const url = AUTH_URL;

	const schema = yup.object().shape({
		email: yup.string().required("Please enter your email"),
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
		setSubmitting(true);
		setLoginError(null);

		const dataLogin = { identifier: data.email, password: data.password };

		try {
			const response = await axios.post(url, dataLogin);
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
			<SubHeading header="Only for administrator i Holidaze" />
			<div className="login">
				<form onSubmit={handleSubmit(onSubmit)} className="login__container container-sm">
					<div className="form-group">
						<fieldset disabled={submitting}>
							<input
								className="mt-3 form-control"
								name="email"
								type="email"
								placeholder="Email"
								{...register("email", { required: true })}
							/>
							{errors.email && <FormWarning>{errors.email.message}</FormWarning>}

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
			</div>
		</>
	);
}
export default LoginForm;
