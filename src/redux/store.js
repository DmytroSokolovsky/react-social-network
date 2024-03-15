import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			postsData: [
				{ id: 1, message: "How are you?", likesCount: 0 },
				{ id: 2, message: "It's my post", likesCount: 23 },
				{ id: 3, message: "It's my post", likesCount: 23 },
				{ id: 4, message: "It's my post", likesCount: 23 },
				{ id: 5, message: "It's my post", likesCount: 23 },
			],
			newPostText: "it-kamasutra.com",
		},
		messagesPage: {
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
			newMessageText: "",
		},
		sidebar: {},
	},
	_renderEntireTree() {
		console.log("State changed");
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._renderEntireTree = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = dialogsReducer(
			this._state.messagesPage,
			action
		);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._renderEntireTree(this._state);
	},
};

export default store;
