import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
	return (
		<main className={classes.content}>
			<ProfileInfo
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				savePhoto={props.savePhoto}
				saveProfile={props.saveProfile}
			/>
			<MyPostsContainer />
		</main>
	);
};

export default Profile;
