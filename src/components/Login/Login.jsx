import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControl";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Profile from "../Profile/Profile";
import s from "./../common/FormsControls/FormsControl.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField("Email", "email", [required], Input)}
			{createField("Password", "password", [required], Input, {
				type: "password",
			})}
			{createField(
				"Password",
				"rememberMe",
				[],
				Input,
				{
					type: "checkbox",
				},
				"Remember me"
			)}
			{captchaUrl && <img src={captchaUrl} />}
			{captchaUrl && (
				<div>
					{createField("Symbols from image", "captcha", [required], Input)}
				</div>
			)}
			{error && <div className={s.formSummaryError}>{error}</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: "login",
})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(
			formData.email,
			formData.password,
			formData.rememberMe,
			formData.captcha
		);
	};

	if (props.isAuth) {
		return <Navigate to={"/profile"} />;
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
