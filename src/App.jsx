import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Notes />} />
					<Route path="/new-note" element={<CreateNote />} />
					<Route path="/edit/:id" element={<EditNote />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
