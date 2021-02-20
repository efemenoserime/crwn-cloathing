import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../CollectionPage/collection.container";
import CollectionsOverviewContainer from "../../components/collection-overview/collections-overview.container";

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionStartAsync } = this.props;
		fetchCollectionStartAsync();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStartAsync: (collectionsMap) =>
		dispatch(fetchCollectionStartAsync(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
