import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import CollectionPage from "./Collection.component";
import WithSpinner from "../../components/withSpinner/withSpinner.component";

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
