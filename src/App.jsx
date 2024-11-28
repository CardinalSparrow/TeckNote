import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import { useEffect, useState } from "react";

function App() {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("notes")) || []
	);

	const [bgColor, setBgColor] = useState("white"); // Default color
	const [txtColor, setTxtColor] = useState("black"); // Default color

	console.log(notes);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<div id="app" className="h-full w-full">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Notes notes={notes} />} />
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
					<Route
						path="/edit/:id"
						element={<EditNote notes={notes} setNotes={setNotes} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
