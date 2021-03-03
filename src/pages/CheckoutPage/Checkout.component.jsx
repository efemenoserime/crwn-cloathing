import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selector";
import {
	CheckoutHeader,
	CheckoutHeaderBlock,
	CheckoutPageContainer,
	CheckoutTestWarning,
	CheckoutTotal,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, totalPrice }) => (
	<CheckoutPageContainer>
		<CheckoutHeader>
			<CheckoutHeaderBlock>
				<span>Product</span>
			</CheckoutHeaderBlock>
			<CheckoutHeaderBlock>
				<span>Description</span>
			</CheckoutHeaderBlock>
			<CheckoutHeaderBlock>
				<span>Quantity</span>
			</CheckoutHeaderBlock>
			<CheckoutHeaderBlock>
				<span>Price</span>
			</CheckoutHeaderBlock>
			<CheckoutHeaderBlock>
				<span>Remove</span>
			</CheckoutHeaderBlock>
		</CheckoutHeader>
		{cartItems.map((item) => (
			<CheckoutItem key={item.id} cartItem={item} />
		))}
		<CheckoutTotal>
			<span>TOTAL: ${totalPrice}</span>
		</CheckoutTotal>
		<CheckoutTestWarning>
			* Please use the following test credit card for payments
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</CheckoutTestWarning>
		<StripeCheckoutButton price={totalPrice} />
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
