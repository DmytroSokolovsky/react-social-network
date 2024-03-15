import {
	Input,
	createField,
	Textarea,
} from "./../../common/FormsControls/FormsControl";
import { Contact } from "./ProfileInfo";
import { reduxForm } from "redux-form";
import s from "./ProfileInfo.module.css";
import style from "./../../common/FormsControls/FormsControl.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button>Save</button>
			</div>
			{error && <div className={style.formSummaryError}>{error}</div>}
			<div>Full name: {createField("Full name", "fullName", [], Input)}</div>
			<div>
				Looking fot a job:{" "}
				{createField("Looking for a job", "lookingForAJob", [], Input, {
					type: "checkbox",
				})}
			</div>
			<div>
				My professional skills:
				{createField(
					"Looking for a job description",
					"lookingForAJobDescription",
					[],
					Textarea
				)}
			</div>
			<div>About me: {createField("About me", "AboutMe", [], Textarea)}</div>
			<div>
				Contacts:{" "}
				{Object.keys(profile.contacts).map((key) => {
					return (
						<div key={key}>
							<div className={s.contact}>{key}</div>
							<div className={s.contact}>
								{createField(key, "contacts." + key, [], Input)}
							</div>
						</div>
					);
				})}
			</div>
		</form>
	);
};

const ProfileDataFormReduxForm = reduxForm({
	form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
