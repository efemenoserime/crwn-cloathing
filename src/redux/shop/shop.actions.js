import {
	convertCollectionsSnapshotToMap,
	firestore,
} from "../../firebase/firebase.utils";

const { ShopActionTypes } = require("./shop.types");

export const fetchCollectionStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

export const fetchCollectionStartAsync = () => (dispatch) => {
	const collectionRef = firestore.collection("collections");
	dispatch(fetchCollectionStart());

	collectionRef
		.get()
		.then((collectionSnapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(
				collectionSnapshot
			);
			dispatch(fetchCollectionSuccess(collectionsMap));
		})
		.catch((error) => dispatch(fetchCollectionFailure(error.message)));
};
