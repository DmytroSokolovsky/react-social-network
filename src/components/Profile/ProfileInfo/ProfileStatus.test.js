import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
	test("status from props should be in the state", () => {
		const component = create(<ProfileStatus status="it" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("it");
	});

	test("after creation span should be displayed", () => {
		const component = create(<ProfileStatus status="it" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span).not.toBeNull();
	});

	test("after creation input should be null", () => {
		const component = create(<ProfileStatus status="it" />);
		const root = component.root;
		expect(() => {
			let input = root.findByType("input");
		}).toThrow();
	});

	test("span should contain it", () => {
		const component = create(<ProfileStatus status="it" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.children[0]).toBe("it");
	});

	test("input should be displayed in editMode", () => {
		const component = create(<ProfileStatus status="it" />);
		const root = component.root;
		let span = root.findByType("span");
		span.props.onDoubleClick();
		let input = root.findByType("input");
		expect(input.props.value).toBe("it");
	});

	test("input should be displayed in editMode", () => {
		const mockCallback = jest.fn();
		const component = create(
			<ProfileStatus status="it" updateStatus={mockCallback} />
		);
		const instance = component.getInstance();
		instance.deActivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});
