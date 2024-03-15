import React, { Component, useState, useEffect } from "react";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	activateEditMode = () => {
		console.log("this:", this);
		this.setState({
			editMode: true,
		});
	};
	deActivateEditMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateStatus(this.state.status);
	};
	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			});
		}
	}

	render() {
		return (
			<div>
				Status:{" "}
				{!this.state.editMode && (
					<span onDoubleClick={this.activateEditMode}>
						{this.props.status || "------"}
					</span>
				)}
				{this.state.editMode && (
					<div>
						<input
							onChange={this.onStatusChange}
							autoFocus
							onBlur={this.deActivateEditMode}
							value={this.state.status}
						/>
					</div>
				)}
			</div>
		);
	}
}

// const ProfileStatus = (props) => {
// 	const [editMode, setEditMode] = useState(false);
// 	const [status, setStatus] = useState(props.status);

// 	useEffect(() => {
// 		setStatus(props.status);
// 	}, [props.status]);

// 	let activateEditMode = () => {
// 		setEditMode(true);
// 	};

// 	let deActivateEditMode = () => {
// 		setEditMode(false);
// 		props.updateStatus(status);
// 	};

// 	let onStatusChange = (e) => {
// 		setStatus(e.currentTarget.value);
// 	};

// 	return (
// 		<div>
// 			{!editMode && (
// 				<div>
// 					<span onDoubleClick={activateEditMode}>
// 						{props.status || "-----"}
// 					</span>
// 				</div>
// 			)}
// 			{editMode && (
// 				<div>
// 					<input
// 						onChange={onStatusChange}
// 						autoFocus
// 						onBlur={deActivateEditMode}
// 						value={status}
// 					/>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

export default ProfileStatus;
