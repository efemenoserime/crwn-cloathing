import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/Homepage.component";
import ShopPage from "./pages/ShopPage/Shop.component";
import Header from "./components/header/header.component";
import SignPage from "./pages/SignPage/SignPage.component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignPage} />
			</Switch>
		</div>
	);
}

export default App;
