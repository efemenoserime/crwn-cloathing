import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import {
	CollectionPreviewContainer,
	CollectionPreviewTitle,
	CollectionPreviewView,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match }) => {
	return (
		<CollectionPreviewContainer>
			<CollectionPreviewTitle
				onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
			>
				{title}
			</CollectionPreviewTitle>
			<CollectionPreviewView>
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</CollectionPreviewView>
		</CollectionPreviewContainer>
	);
};

export default withRouter(CollectionPreview);
