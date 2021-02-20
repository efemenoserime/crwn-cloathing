import React from "react";
import { Route } from "react-router-dom";

import {
	convertCollectionsSnapshotToMap,
	firestore,
} from "../../firebase/firebase.utils";

import CollectionOverview from "../../components/collection-overview/collection-overview.comonent";
import CollectionPage from "../CollectionPage/Collection.component";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/withSpinner/withSpinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	constructor() {
		super();

		this.state = {
			loading: true,
		};
	}
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection("collections");
		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (collectionSnapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(
					collectionSnapshot
				);

				this.props.updateCollections(collectionsMap);
				this.setState({ loading: false });
			}
		);
	}

	componentWillUnmount() {
		this.unsubscribeFromSnapshot();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner
							isLoading={this.state.loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={this.state.loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
