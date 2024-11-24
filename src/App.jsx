import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import dummyNotes from "./dummy_notes";
import { useState } from "react";

function App() {
	const [notes, setNotes] = useState(dummyNotes);

	return (
		<div id="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Notes notes={notes} />} />
					<Route path="/new-note" element={<CreateNote />} />
					<Route path="/edit/:id" element={<EditNote />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
