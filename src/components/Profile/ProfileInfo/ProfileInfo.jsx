import s from "./ProfileInfo.module.css";
import landscape from "./../../../landscape.jpg";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "./../../../userPhoto.jpg";
import ProfileStatus from "./ProfileStatus";
import { useState } from "react";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
	let [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <Preloader />;
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	};

	const onSubmit = (formData) => {
		props.saveProfile(formData).then(() => {
			setEditMode(false);
		});
	};

	return (
		<>
			{/* <div className={classes.content__image}>
            <img src={landscape} alt="" />
         </div> */}
			<div className={s.content__description}>
				<img
					src={props.profile.photos.large || userPhoto}
					className={s.mainPhoto}
				/>
				{props.isOwner && (
					<input type="file" onChange={onMainPhotoSelected} />
				)}
				{editMode ? (
					<ProfileDataFormReduxForm
						initialValues={props.profile}
						onSubmit={onSubmit}
						profile={props.profile}
					/>
				) : (
					<ProfileData
						profile={props.profile}
						isOwner={props.isOwner}
						goToEditMode={() => {
							setEditMode(true);
						}}
					/>
				)}
				<ProfileStatus
					status={props.status}
					updateStatus={props.updateStatus}
				/>
			</div>
		</>
	);
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div>
			{isOwner && (
				<div>
					<button onClick={goToEditMode}>Edit</button>
				</div>
			)}
			<div>Full name: {profile.fullName}</div>
			<div>Looking fot a job: {profile.lookingForAJob ? "yes" : "no"}</div>
			{profile.lookingForAJob && (
				<div>
					My professional skills: {profile.lookingForAJobDescription}
				</div>
			)}
			<div>
				Contacts:{" "}
				{Object.keys(profile.contacts).map((key) => {
					return (
						<Contact
							key={key}
							contactTitle={key}
							contactValue={profile.contacts[key]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div className={s.contact}>
			{contactTitle}: {contactValue}
		</div>
	);
};

export default ProfileInfo;
