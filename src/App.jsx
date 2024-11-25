import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([]);

	const [bgColor, setBgColor] = useState("white"); // Default color
	const [txtColor, setTxtColor] = useState("black"); // Default color

	console.log(notes);

	return (
		<div id="app">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Notes
								notes={notes}
								// bgColor={bgColor}
								// setBgColor={setBgColor}
								// txtColor={txtColor}
								// setTxtColor={setTxtColor}
							/>
						}
					/>
					<Route
						path="/new-note"
						element={
							<CreateNote
								setNotes={setNotes}
								bgColor={bgColor}
								setBgColor={setBgColor}
								txtColor={txtColor}
								setTxtColor={setTxtColor}
							/>
						}
					/>
					<Route path="/edit/:id" element={<EditNote />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
