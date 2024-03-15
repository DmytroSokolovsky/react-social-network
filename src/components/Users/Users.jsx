import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
	currentPage,
	totalUsersCount,
	pageSize,
	onPageChanged,
	...props
}) => {
	return (
		<div className={styles.userItems}>
			<Paginator
				currentPage={currentPage}
				totalItemsCount={totalUsersCount}
				pageSize={pageSize}
				onPageChanged={onPageChanged}
			/>
			{props.users.map((user) => (
				<User
					key={user.id}
					user={user}
					followingInProgress={props.followingInProgress}
					follow={props.follow}
					unFollow={props.unFollow}
				/>
			))}
		</div>
	);
};

export default Users;
