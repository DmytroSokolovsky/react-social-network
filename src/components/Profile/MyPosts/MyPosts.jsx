import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, { PureComponent } from "react";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControl";
import {
	maxLengthCreator,
	required,
} from "./../../../utils/validators/validators";

const MyPosts = React.memo((props) => {
	let postElemets = [...props.postsData].reverse().map((post) => {
		return (
			<Post
				message={post.message}
				likesCount={post.likesCount}
				key={post.id}
			/>
		);
	});

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	const addNewPost = (values) => {
		props.addPost(values.newPostText);
	};

	return (
		<div>
			My posts
			<div>
				<AddNewPostFormRedux onSubmit={addNewPost} />
			</div>
			<div className={classes.content__posts}>{postElemets}</div>
		</div>
	);
});

// class MyPosts extends PureComponent {
// 	componentDidMount() {
// 		setTimeout(() => {
// 			this.setState({ a: 12 });
// 		}, 3000);
// 	}

// 	// shouldComponentUpdate(nextProps, nextState) {
// 	// 	return nextProps != this.props || nextState != this.state;
// 	// }

// 	newPostElement = React.createRef();

// 	postElemets = this.props.postsData.map((post) => {
// 		return (
// 			<Post
// 				message={post.message}
// 				likesCount={post.likesCount}
// 				key={post.id}
// 			/>
// 		);
// 	});

// 	onAddPost() {
// 		this.props.addPost();
// 	}

// 	onPostChange() {
// 		let text = this.newPostElement.current.value;
// 		this.props.updateNewPostText(text);
// 	}

// 	addNewPost(values) {
// 		this.props.addPost(values.newPostText);
// 	}

// 	render() {
// 		console.log("MyPosts");
// 		return (
// 			<div>
// 				My posts
// 				<div>
// 					<AddNewPostFormRedux onSubmit={this.addNewPost} />
// 				</div>
// 				<div className={classes.content__posts}>{this.postElemets}</div>
// 			</div>
// 		);
// 	}
// }

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Textarea}
					name="newPostText"
					placeholder="Enter your post"
					validate={[required, maxLength10]}
				/>
			</div>
			<button>Add post</button>
		</form>
	);
};

const AddNewPostFormRedux = reduxForm({
	form: "post",
})(AddNewPostForm);

// const addNewPostForm = (props) => {
//    return (
//       <form>
//          <div>
//             <textarea
//                onChange={onPostChange}
//                ref={newPostElement}
//                value={props.newPostText}
//             />
//          </div>
//          <button onClick={onAddPost}>Add post</button>
//       </form>
//    )
// }

export default MyPosts;
