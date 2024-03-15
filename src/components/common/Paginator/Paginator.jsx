import styles from "./Paginator.module.css";
import { useState } from "react";
import cn from "classnames";

let Paginator = ({
	totalItemsCount,
	pageSize,
	currentPage,
	onPageChanged,
	portionSize = 10,
}) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div>
			{portionNumber > 1 && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber - 1);
					}}
				>
					PREV
				</button>
			)}
			{pages
				.filter(
					(p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
				)
				.map((page) => {
					return (
						<span
							key={page}
							onClick={(e) => {
								onPageChanged(page);
							}}
							className={cn(
								{
									[styles.selectedPage]: page === currentPage,
								},
								styles.page
							)}
						>
							{page}
						</span>
					);
				})}
			{portionCount > portionNumber && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber + 1);
					}}
				>
					NEXT
				</button>
			)}
		</div>
	);
};

// let Paginator = (props) => {
// 	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
// 	let pages = [];
// 	for (let i = 1; i <= pagesCount; i++) {
// 		pages.push(i);
// 	}
// 	return (
// 		<div>
// 			{pages.map((page) => {
// 				return (
// 					<span
// 						key={page}
// 						onClick={(e) => {
// 							props.onPageChanged(page);
// 						}}
// 						className={
// 							page === props.currentPage
// 								? `${styles.selectedPage} ${styles.page}`
// 								: styles.page
// 						}
// 					>
// 						{page}
// 					</span>
// 				);
// 			})}
// 		</div>
// 	);
// };

export default Paginator;
