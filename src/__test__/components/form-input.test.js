/* eslint-disable testing-library/await-async-query */
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import FormInput from "../../components/form-input/form-input.component";

afterEach(cleanup);

describe("<FormInput />", () => {
	const mockHandleChange = jest.fn();

	it("renders component successfully", () => {
		const { asFragment } = render(<FormInput />);
		expect(asFragment(<FormInput />)).toMatchSnapshot();
	});

	it("renders form-input without label", () => {
		expect.assertions(1);
		render(<FormInput handleChange={mockHandleChange} />);
		return screen.findByTestId("form-input-title").catch((error) => {
			expect(error).toBeTruthy();
		});
	});

	it("renders form-input with label", () => {
		expect.assertions(1);
		const mockLabel = "Full Name";
		render(<FormInput handleChange={mockHandleChange} label={mockLabel} />);
		return screen.findByTestId("form-input-title").then((element) => {
			expect(element.textContent).toEqual(mockLabel);
		});
	});
});
