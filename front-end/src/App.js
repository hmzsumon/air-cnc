import React, { Fragment, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import HeaderArea from "./components/header-area/HeaderArea";
import PlaceMapPage from "./pages/place-map-page/PlaceMapPage";
import HousePage from "./pages/house-page/HousePage";
import CheckOutPage from "./pages/check-out-page/CheckOutPage";
import AuthPage from "./pages/auth-page/AuthPage";
import { store } from "./redux/store";
import setAuthToken from "./components/utils/setAuthToken";
import { loadUser } from "./redux/user/user.actions";
import PrivateRoute from "./components/utils/PrivateRoute";
import PaymentSuccessPage from "./pages/payment-success-page/PaymentSuccessPage";
import NotFound from "./pages/not-found/NotFound";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Fragment>
			<HeaderArea />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/map" component={PlaceMapPage} />
				<Route exact path="/house/:id" component={HousePage} />
				<Route exact path="/auth" component={AuthPage} />
				<PrivateRoute path="/pay-success">
					<PaymentSuccessPage />
				</PrivateRoute>
				<PrivateRoute path="/checkout">
					<CheckOutPage />
				</PrivateRoute>
				<Route path="*" component={NotFound} />
			</Switch>
		</Fragment>
	);
}

export default App;
