import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignPageContainer } from "./sign-page.styles";

const SignPage = () => (
	<SignPageContainer>
		<SignIn />
		<SignUp />
	</SignPageContainer>
);

export default SignPage;
