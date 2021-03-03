import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { SigninContainer, SigninButtons, SigninTitle } from "./sign-in.styles";

const SignIn = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = credentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setCredentials({ email: "", password: "" }); // Set credentials to default state
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setCredentials({ ...credentials, [name]: value });
	};

	return (
		<SigninContainer>
			<SigninTitle>I already have an account</SigninTitle>
			<span>Sign in with your mail and password</span>
			<form>
				<FormInput
					type="email"
					name="email"
					label="Email"
					value={email}
					required
					onChange={handleChange}
				/>
				<FormInput
					type="password"
					name="password"
					label="Password"
					value={password}
					required
					onChange={handleChange}
				/>
				<SigninButtons>
					<CustomButton onClick={handleSubmit}>Sign In</CustomButton>
					<CustomButton
						onClick={(e) => {
							e.preventDefault();
							signInWithGoogle();
						}}
						isGoogleSignIn
					>
						Sign In with Google
					</CustomButton>
				</SigninButtons>
			</form>
		</SigninContainer>
	);
};

export default SignIn;
