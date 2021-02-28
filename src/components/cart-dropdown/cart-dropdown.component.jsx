import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import {
	CartDropdownCartItems,
	CartDropdownContainer,
	CartDropdownEmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartDropdownCartItems>
			{cartItems.length ? (
				cartItems.map((item) => <CartItem key={item.id} item={item} />)
			) : (
				<CartDropdownEmptyMessage>Your cart is empty</CartDropdownEmptyMessage>
			)}
		</CartDropdownCartItems>
		<CustomButton
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			Go to checkout
		</CustomButton>
	</CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
