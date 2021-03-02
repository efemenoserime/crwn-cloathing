import React from "react";
import { connect } from "react-redux";

import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";
import {
	CheckoutItemContainer,
	CheckoutItemImageContainer,
	CheckoutItemProperties,
	CheckoutQuantityArrow,
	CheckoutQuantityValue,
	CheckoutRemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CheckoutItemContainer>
			<CheckoutItemImageContainer>
				<img src={imageUrl} alt="item" />
			</CheckoutItemImageContainer>
			<CheckoutItemProperties>{name}</CheckoutItemProperties>
			<CheckoutItemProperties quant>
				<CheckoutQuantityArrow onClick={() => removeItem(cartItem)}>
					&#10094;
				</CheckoutQuantityArrow>{" "}
				<CheckoutQuantityValue>{quantity}</CheckoutQuantityValue>{" "}
				<CheckoutQuantityArrow onClick={() => addItem(cartItem)}>
					&#10095;
				</CheckoutQuantityArrow>{" "}
			</CheckoutItemProperties>
			<CheckoutItemProperties> {price} </CheckoutItemProperties>
			<CheckoutRemoveButton onClick={() => clearItem(cartItem)}>
				&#10005;
			</CheckoutRemoveButton>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItem(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
