import React, { Component } from "react";
import { useEffect } from "react";
import Profile from "./Profile";
import {
	getUserProfile,
	getStatus,
	updateStatus,
	savePhoto,
	saveProfile,
} from "./../../redux/profile-reducer";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

function ProfileContainer(props) {
	let { userId } = useParams();
	if (!userId) {
		userId = props.authorizedUserId;
		if (!userId) {
			userId = null;
		}
	}

	useEffect(() => {
		props.getUserProfile(userId);
		props.getStatus(userId);
	}, [userId]);

	if (props.isAuth === false) {
		return <Navigate to={"/login"} />;
	}

	return (
		<div>
			<Profile
				isOwner={userId === props.authorizedUserId && userId}
				{...props}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				savePhoto={props.savePhoto}
			/>
		</div>
	);
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth,
	};
};

// export default connect(mapStateToProps, { getUserProfile })(
// 	AuthRedirectComponent
// );

export default compose(
	connect(mapStateToProps, {
		getUserProfile,
		getStatus,
		updateStatus,
		savePhoto,
		saveProfile,
	})
	//withAuthRedirect
)(ProfileContainer);
