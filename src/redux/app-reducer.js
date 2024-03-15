import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "SET_USER_DATA";
const SHOW_GLOBAL_ERROR = "SHOW_GLOBAL_ERROR";
const UNSHOW_GLOBAL_ERROR = "UNSHOW_GLOBAL_ERROR";

let initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			};
		default:
			return state;
	}
};

export const initializedSuccess = () => ({
	type: INITIALIZED_SUCCESS,
});
export const showGlobalError = () => ({
	type: SHOW_GLOBAL_ERROR,
});
export const unShowGlobalError = () => ({
	type: UNSHOW_GLOBAL_ERROR,
});

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());
	promise.then(() => {
		dispatch(initializedSuccess());
	});
};

export default appReducer;
