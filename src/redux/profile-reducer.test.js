import profileReducer, {
	addPostActionCreator,
	deletePost,
} from "./profile-reducer";

let state = {
	postsData: [
		{ id: 1, message: "How are you?", likesCount: 0 },
		{ id: 2, message: "It's my post", likesCount: 23 },
		{ id: 3, message: "It's my post", likesCount: 23 },
		{ id: 4, message: "It's my post", likesCount: 23 },
		{ id: 5, message: "It's my post", likesCount: 23 },
	],
};

it("length of posts should be incremented", () => {
	let action = addPostActionCreator("it");
	let newState = profileReducer(state, action);
	expect(newState.postsData.length).toBe(6);
});

it("message of new post should be it", () => {
	let action = addPostActionCreator("it");
	let newState = profileReducer(state, action);
	expect(newState.postsData[5].message).toBe("it");
});

it("after deleting length of messages should be decremented", () => {
	let action = deletePost(1);
	let newState = profileReducer(state, action);
	expect(newState.postsData.length).toBe(4);
});
