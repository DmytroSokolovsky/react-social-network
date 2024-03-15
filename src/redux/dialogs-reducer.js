//const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MEESSAGE";

let initialState = {
	messagesData: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How are you" },
		{ id: 3, message: "Yeeee" },
	],
	dialogsData: [
		{ id: 1, name: "Dimych" },
		{ id: 2, name: "Olya" },
		{ id: 3, name: "Valera" },
		{ id: 4, name: "Viktor" },
	],
	//newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		// case UPDATE_NEW_MESSAGE_TEXT:
		// 	return {
		// 		...state,
		// 		newMessageText: action.body,
		// 	};
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				//newMessageText: "",
				messagesData: [...state.messagesData, { id: 6, message: body }],
			};
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageBody) => ({
	type: SEND_MESSAGE,
	newMessageBody,
});
// export const updateNewMessageTextCreator = (body) => ({
// 	type: UPDATE_NEW_MESSAGE_TEXT,
// 	body: body,
// });

export default dialogsReducer;
