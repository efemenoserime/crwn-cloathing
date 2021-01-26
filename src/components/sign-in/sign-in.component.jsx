import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

export class SignIn extends Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
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
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle}>
						Sign In with Google
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
