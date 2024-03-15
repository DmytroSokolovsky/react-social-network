import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<aside className={classes.aside}>
			<div className={classes.aside__body}>
				<nav className={`${classes.aside__menu} ${classes.menuaside}`}>
					<ul className={classes.menuaside__list}>
						<li>
							<NavLink
								to="/profile"
								className={(navData) =>
									navData.isActive
										? `${classes.menuaside__link} ${classes.menuaside__activeLink} `
										: classes.menuaside__link
								}
							>
								Profile
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dialogs"
								className={(navData) =>
									navData.isActive
										? `${classes.menuaside__link} ${classes.menuaside__activeLink} `
										: classes.menuaside__link
								}
							>
								Dialogs
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/users"
								className={(navData) =>
									navData.isActive
										? `${classes.menuaside__link} ${classes.menuaside__activeLink} `
										: classes.menuaside__link
								}
							>
								Users
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/news"
								className={(navData) =>
									navData.isActive
										? `${classes.menuaside__link} ${classes.menuaside__activeLink} `
										: classes.menuaside__link
								}
							>
								News
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/music"
								className={(navData) =>
									navData.isActive
										? `${classes.menuaside__link} ${classes.menuaside__activeLink} `
										: classes.menuaside__link
								}
							>
								Music
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/settings"
								className={(navData) =>
									navData.isActive
										? `${classes.menuaside__link} ${classes.menuaside__activeLink} `
										: classes.menuaside__link
								}
							>
								Settings
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Nav;
