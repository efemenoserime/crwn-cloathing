import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage/Homepage.component";
import ShopPage from "./pages/ShopPage/Shop.component";
import Header from "./components/header/header.component";
import SignPage from "./pages/SignPage/SignPage.component";
import CheckoutPage from "./pages/CheckoutPage/Checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

import "./App.css";

class App extends React.Component {
	unsubsribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// on user snapshot change
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}

			// Set current user to null
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubsribeFromAuth();
	}

	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() => (currentUser ? <Redirect to="/" /> : <SignPage />)}
					/>
					<Route exact path="/checkout" component={CheckoutPage} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
