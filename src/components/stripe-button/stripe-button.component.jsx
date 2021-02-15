import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_YygFctwfYKkMp5y7RQFOVPbw00bjyVpB3C";

	const onToken = (token) => {
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay now"
			name="CRWN Cloathing KG"
			billingAddress
			shippingAddress
			description={`Your total is $ ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
