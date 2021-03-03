import React from "react";

import {
	GroupContainer,
	FormInputContainer,
	FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, value = "", ...otherProps }) => {
	return (
		<GroupContainer>
			<FormInputContainer onChange={handleChange} {...otherProps} />
			{label ? (
				<FormInputLabel
					data-testid="form-input-title"
					className={value.length ? "shrink" : ""}
				>
					{label}
				</FormInputLabel>
			) : null}
		</GroupContainer>
	);
};

export default FormInput;
