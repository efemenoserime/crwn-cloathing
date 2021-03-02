import React from "react";

import { CustomBtn } from "./custom-button.styles";

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => {
	return (
		<CustomBtn
			className={`${inverted ? "inverted" : ""} ${
				isGoogleSignIn ? "google-sign-in" : ""
			} custom-button`}
			{...otherProps}
		>
			{children}
		</CustomBtn>
	);
};

export default CustomButton;
