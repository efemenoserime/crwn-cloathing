import React, { Component } from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./SignPage.scss";

export class SignPage extends Component {
	render() {
		return (
			<div className="sign-in-and-sign-up">
				<SignIn />
				<SignUp />
			</div>
		);
	}
}

export default SignPage;
