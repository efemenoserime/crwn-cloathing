import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import CollectionOverview from "../../components/collection-overview/collection-overview.comonent";
import CollectionPage from "../CollectionPage/Collection.component";

import WithSpinner from "../../components/withSpinner/withSpinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionStartAsync } = this.props;
		fetchCollectionStartAsync();
	}

	render() {
		const { match, isCollectionsLoaded } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner
							isLoading={!isCollectionsLoaded}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={!isCollectionsLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStartAsync: (collectionsMap) =>
		dispatch(fetchCollectionStartAsync(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
