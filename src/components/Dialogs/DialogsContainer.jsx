import { React } from "react";
import Dialogs from "./Dialogs";
import {
	updateNewMessageTextCreator,
	sendMessageCreator,
} from "../../redux/dialogs-reducer";
// import StoreContext from "../../StoreContext";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

// const DialogsContainer = (props) => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				let state = store.getState().messagesPage;

// 				let onMessageChange = (body) => {
// 					store.dispatch(updateNewMessageTextCreator(body));
// 				};

// 				let onSendMessage = () => {
// 					store.dispatch(sendMessageCreator());
// 				};
// 				return (
// 					<Dialogs
// 						updateNewMessageText={onMessageChange}
// 						sendMessage={onSendMessage}
// 						messagesPage={state}
// 					/>
// 				);
// 			}}
// 		</StoreContext.Consumer>
// 	);
// };

// export default DialogsContainer;

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		// updateNewMessageText: (body) => {
		// 	dispatch(updateNewMessageTextCreator(body));
		// },
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody));
		},
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
