import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogMessage = (props) => {
	return (
		<>
			<div className={classes.messages__item}>{props.message}</div>
		</>
	);
};

export default DialogMessage;
