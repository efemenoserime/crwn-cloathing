import React from "react";

import {
	CartItemContainer,
	CartItemDetailProperty,
	CartItemDetails,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<img src={imageUrl} alt={name} />
		<CartItemDetails>
			<CartItemDetailProperty>{name}</CartItemDetailProperty>
			<CartItemDetailProperty>
				{quantity} x ${price}
			</CartItemDetailProperty>
		</CartItemDetails>
	</CartItemContainer>
);

export default CartItem;
