import classes from "./Post.module.css";
import avatar from "../../../../Avatar.jpg";

const Post = (props) => {
	return (
		<div className={classes.content__post}>
			{props.message} {props.likesCount}
			<img src={avatar} alt="" />
			<div>Like</div>
			<span>Dislike</span>
		</div>
	);
};

export default Post;
