import React, { useState } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

const SignUp = () => {
	const [userData, setUserData] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, email, password, confirmPassword } = userData;

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });

			setUserData({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.error("Error creating new user", error);
		}
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign in with email and password</span>
			<form action="" className="sign-up-form">
				<FormInput
					type="text"
					name="displayName"
					label="Display Name"
					value={displayName}
					handleChange={handleChange}
				/>
				<FormInput
					type="email"
					name="email"
					label="Email"
					value={email}
					handleChange={handleChange}
				/>
				<FormInput
					type="password"
					name="password"
					label="Password"
					value={password}
					handleChange={handleChange}
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					label="Confim Password"
					value={confirmPassword}
					handleChange={handleChange}
				/>
				<CustomButton type="submit" onClick={handleSubmit}>
					SIGN UP
				</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
