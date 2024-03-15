import s from "./FormsControl.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: { error, touched }, children }) => {
	const hasError = error && touched;
	return (
		<div className={`${s.formControl} ${hasError ? s.error : ""}`}>
			<div>{children}</div>
			{hasError && <span>{error}</span>}
		</div>
	);
};

export const Textarea = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps}></textarea>
		</FormControl>
	);
};

export const Input = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			<input {...input} {...restProps}></input>
		</FormControl>
	);
};

export const createField = (
	placeholder,
	name,
	validators,
	component,
	props = {},
	text = ""
) => {
	return (
		<div>
			<Field
				placeholder={placeholder}
				component={component}
				name={name}
				validate={validators}
				{...props}
			/>
			{text}
		</div>
	);
};
