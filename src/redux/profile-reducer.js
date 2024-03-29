import { profileAPI, usersAPI } from "./../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
	postsData: [
		{ id: 1, message: "How are you?", likesCount: 0 },
		{ id: 2, message: "It's my post", likesCount: 23 },
		{ id: 3, message: "It's my post", likesCount: 23 },
		{ id: 4, message: "It's my post", likesCount: 23 },
		{ id: 5, message: "It's my post", likesCount: 23 },
	],
	//newPostText: "it-kamasutra.com",
	profile: null,
	status: "",
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 6,
				message: action.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
				//newPostText: "",
			};
		}
		// case UPDATE_NEW_POST_TEXT: {
		// 	return {
		// 		...state,
		// 		newPostText: action.newText,
		// 	};
		// }
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		case DELETE_POST: {
			return {
				...state,
				postsData: state.postsData.filter(
					(post) => post.id !== action.postId
				),
			};
		}
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			};
		}
		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => ({
	type: ADD_POST,
	newPostText,
});
// export const updateNewPostTextActionCreator = (text) => ({
// 	type: UPDATE_NEW_POST_TEXT,
// 	newText: text,
// });
export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});
export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});
export const deletePost = (postId) => ({
	type: DELETE_POST,
	postId,
});
export const savePhotoSuccess = (photos) => ({
	type: SAVE_PHOTO_SUCCESS,
	photos,
});

export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
	try {
		let response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	} catch (error) {
		alert("Error");
	}
};
export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};
export const saveProfile = (profile) => async (dispatch, getState) => {
	let userId = getState().auth.userId;
	let response = await profileAPI.saveProfile(profile);
	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userId));
	} else {
		dispatch(
			stopSubmit("edit-profile", { _error: response.data.messages[0] })
		);
		return Promise.reject(response.data.messages[0]);
	}
};

export default profileReducer;
