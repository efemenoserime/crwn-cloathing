import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/Homepage.component";
import ShopPage from "./pages/ShopPage/Shop.component";
import Header from "./components/header/header.component";
import SignPage from "./pages/SignPage/SignPage.component";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubsribeFromAuth = null;

	componentDidMount() {
		this.unsubsribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubsribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
