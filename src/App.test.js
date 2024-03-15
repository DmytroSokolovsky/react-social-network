import MainApp from "./App";
import ReactDOM from "react-dom/client";

test("renders without crashing", () => {
	const container = document.createElement("div");
	const root = ReactDOM.createRoot(container);
	root.render(<MainApp />);
	root.unmount();
});
