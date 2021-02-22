import React from "react";
import { cleanup, render } from "@testing-library/react";
import CartItem from "../../components/cart-item/cart-item.component";

afterEach(cleanup);

describe("<CartItem />", () => {
	const mockItem = {
		imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
		price: 50,
		name: "Boots",
		quantity: 1,
	};
	it("renders CartItem correctly", () => {
		const { asFragment } = render(<CartItem item={mockItem} />);
		expect(asFragment(<CartItem />)).toMatchSnapshot();
	});
});
