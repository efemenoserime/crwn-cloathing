import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import WithSpinner from "../withSpinner/withSpinner.component";
import CollectionOverview from "./collection-overview.comonent";

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
