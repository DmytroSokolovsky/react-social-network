import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import { React } from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "./../common/FormsControls/FormsControl";
import {
	maxLengthCreator,
	required,
} from "./../../utils/validators/validators";

const Dialogs = (props) => {
	let state = props.messagesPage;

	let dialogsElements = state.dialogsData.map((dialog) => {
		return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />;
	});
	let messagesElements = state.messagesData.map((message) => {
		return <DialogMessage message={message.message} key={message.id} />;
	});
	let newMessageText = state.newMessageText;

	// let onMessageChange = (e) => {
	// 	let body = e.target.value;
	// 	props.updateNewMessageText(body);
	// };

	// let onSendMessage = () => {
	// 	props.sendMessage();
	// };

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>{dialogsElements}</div>
			<div className={`${classes.dialogs__messages} ${classes.messages}`}>
				<AddMessageFormRedux onSubmit={addNewMessage} />
				{messagesElements}
			</div>
		</div>
	);
};

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={Textarea}
				name="newMessageBody"
				placeholder="Enter your message"
				validate={[required, maxLength30]}
			/>
			<div>
				<button className={classes.dialogsButton}>Send</button>
			</div>
		</form>
	);
};

const AddMessageFormRedux = reduxForm({
	form: "dialogAddMessageForm",
})(AddMessageForm);

// const AddMessageForm = (props) => {
// 	return (
// 		<form onSubmit={props.handleSubmit}>
// 			<div className={`${classes.dialogs__messages} ${classes.messages}`}>
// 				<Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
// 				<textarea
// 					placeholder="Enter your message"
// 					onChange={onMessageChange}
// 					value={newMessageText}
// 				></textarea>
// 				<div>
// 					<button
// 						className={classes.dialogsButton}
// 						onClick={onSendMessage}
// 					>
// 						Send
// 					</button>
// 				</div>
// 				{messagesElements}
// 			</div>
// 		</form>
// 	);
// };

export default Dialogs;
