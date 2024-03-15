import styles from "./Users.module.css";
import userPhoto from "./../../userPhoto.jpg";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let User = ({ user, followingInProgress, follow, unFollow }) => {
	return (
		<div key={user.id} className={styles.userItem}>
			<span>
				<div>
					<NavLink to={`/profile/${user.id}`}>
						<img
							src={
								user.photos.small !== null
									? user.photos.small
									: userPhoto
							}
							className={styles.userPhoto}
						/>
					</NavLink>
				</div>
				<div>
					{user.followed ? (
						<button
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								unFollow(user.id);
							}}
						>
							Unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								follow(user.id);
							}}
						>
							Follow
						</button>
					)}
				</div>
			</span>
			<span>
				<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</span>
				<span>
					<div>{"user.location.country"}</div>
					<div>{"user.location.city"}</div>
				</span>
			</span>
		</div>
	);
};

export default User;
