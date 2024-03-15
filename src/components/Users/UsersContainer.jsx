import { connect } from "react-redux";
import {
	setCurrentPage,
	requestUsers,
	follow,
	unFollow,
	isFetching,
} from "./../../redux/users-reducer";
import React, { Component } from "react";
import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
	getPageSize,
	getUsers,
	getTotalUsersCount,
	getCurrentPage,
	getFollowingInProgress,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (page) => {
		this.props.getUsers(page, this.props.pageSize);
	};

	render() {
		if (this.props.isAuth === false) {
			return <Navigate to={"/login"} />;
		}

		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unFollow={this.props.unFollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		);
	}
}

// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		followingInProgress: state.usersPage.followingInProgress,
// 	};
// };

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		followingInProgress: getFollowingInProgress(state),
		isFetching: state.usersPage.isFetching,
	};
};

// export default withAuthRedirect(
// 	connect(mapStateToProps, {
// 		setCurrentPage,
// 		getUsers,
// 		follow,
// 		unFollow,
// 	})(UsersContainer)
// );

export default compose(
	connect(mapStateToProps, {
		setCurrentPage,
		getUsers: requestUsers,
		follow,
		unFollow,
	}),
	withAuthRedirect
)(UsersContainer);
