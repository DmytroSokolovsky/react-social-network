import React from "react";
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				let state = store.getState();
// 				let addPost = () => {
// 					store.dispatch(addPostActionCreator());
// 				};

// 				let onPostChange = (text) => {
// 					let action = updateNewPostTextActionCreator(text);
// 					store.dispatch(action);
// 				};
// 				return (
// 					<MyPosts
// 						updateNewPostText={onPostChange}
// 						addPost={addPost}
// 						postsData={state.profilePage.postsData}
// 						newPostText={state.profilePage.newPostText}
// 					/>
// 				);
// 			}}
// 		</StoreContext.Consumer>
// 	);
// };

// export default MyPostsContainer;

let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		// updateNewPostText: (text) => {
		// 	let action = updateNewPostTextActionCreator(text);
		// 	dispatch(action);
		// },
		addPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText));
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
