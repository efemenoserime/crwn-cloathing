import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

export class SignIn extends Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		event.preventDefault();

		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your mail and password</span>
				<form action="">
					<FormInput
						type="email"
						name="email"
						label="Email"
						value={this.state.email}
						required
						onChange={this.handleChange}
					/>
					<FormInput
						type="password"
						name="password"
						label="Password"
						value={this.state.password}
						required
						onChange={this.handleChange}
					/>
					<div className="buttons">
						<CustomButton type="submit" onClick={this.handleSubmit}>
							Sign In
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
