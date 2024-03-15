import "./App.css";
import React, { Fragment, Suspense } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { Provider } from "react-redux";
import store from "./redux/redux-store.js";
import Nav from "./components/Nav/Nav";
import HeaderContainer from "./components/Header/HeaderContainer";
import Error from "./components/Error/Errror";
const DialogsContainer = React.lazy(() =>
	import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
	import("./components/Profile/ProfileContainer")
);
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const UsersContainer = React.lazy(() =>
	import("./components/Users/UsersContainer")
);
const LoginPage = React.lazy(() => import("./components/Login/Login"));

const App = (props) => {
	useEffect(() => {
		props.initializeApp();
		window.addEventListener("unhandledrejection", function (reason, promise) {
			alert("Some error");
		});
	}, []);

	if (!props.initialized) {
		return <Preloader />;
	}

	return (
		<div className="wrapper">
			<HeaderContainer />
			<Nav />
			<div className="wrapper__content">
				<Suspense
					fallback={
						<div>
							<Preloader />
						</div>
					}
				>
					<Routes>
						<Route path="/" element={<Navigate to={"/profile"} />} />
						<Route path="/login" element={<LoginPage />} />
						<Route
							path="/profile/:userId?"
							element={<ProfileContainer />}
						/>
						<Route path="/dialogs" element={<DialogsContainer />} />
						<Route path="/users" element={<UsersContainer />} />
						<Route path="/news" element={<News />} />
						<Route path="/music" element={<Music />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, {
	initializeApp,
})(App);

let MainApp = (props) => {
	return (
		<Router>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</Router>
	);
};

export default MainApp;
