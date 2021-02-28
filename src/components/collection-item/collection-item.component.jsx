import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import {
	CollectionFooter,
	CollectionFooterProperty,
	CollectionItemContainer,
	CollectionItemImage,
} from "./collection-item.styles";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<CollectionItemContainer>
			<CollectionItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
			<CollectionFooter>
				<CollectionFooterProperty name>{name}</CollectionFooterProperty>
				<CollectionFooterProperty>${price}</CollectionFooterProperty>
			</CollectionFooter>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
