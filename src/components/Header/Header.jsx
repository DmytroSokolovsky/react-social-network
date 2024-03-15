import classes from "./Header.module.css";
import logo from "../../logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<a href="" className={classes.header__logo}>
				<img src={logo} alt="" />
			</a>
			<div className={classes.loginBlock}>
				{props.isAuth ? (
					<div>
						{props.login} - <button onClick={props.logout}>Logout</button>
					</div>
				) : (
					<NavLink to={`/login`}>Login</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
