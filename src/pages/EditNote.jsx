/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCreateDate from "../hooks/useCreateDate";
const EditNote = ({ notes, setNotes }) => {
	const { id } = useParams();

	const noteToEdit = notes.find((note) => note.id == id);

	const [title, setTitle] = useState(noteToEdit.title);
	const [details, setDetails] = useState(noteToEdit.details);
	const [bgColor, setBgColor] = useState(noteToEdit.bgColor);
	const [txtColor, setTxtColor] = useState(noteToEdit.txtColor);
	const date = useCreateDate();

	const navigate = useNavigate();

	const handleEdit = (e) => {
		e.preventDefault();
		if (title && details && bgColor && txtColor) {
			const updatedNote = {
				...noteToEdit,
				title,
				details,
				date,
				bgColor,
				txtColor,
			};

			// Create a new array with the edited note at the beginning
			const updatedNotes = [
				updatedNote,
				...notes.filter((item) => item.id !== id), // Remove the old version
			];

			setNotes(updatedNotes); // Update the notes state with the reordered array
			navigate("/"); // Redirect to the home page
		}
	};

	const handleDelete = () => {
		if (window.confirm("Are you sure you want to delete this note?")) {
			const updatedNotes = notes.filter((item) => item.id != id);
			setNotes(updatedNotes);
			navigate("/");
		}
	};

	return (
		<section>
			<header className="flex justify-between items-center">
				<Link
					className=" rounded-xl p-2 text-sm shadow-black transition-all  bottom-16 right-28  border-solid border  bg-secondary hover:bg-white hover:text-secondary"
					to="/"
				>
					<IoIosArrowBack />
				</Link>
				<button
					className="rounded-xl p-2 text-sm shadow-black transition-all  bottom-16 right-28  border-solid border  bg-green-700 hover:bg-white hover:text-green-700"
					onClick={handleEdit}
				>
					Update Note
				</button>
				<button
					className="rounded-xl p-2 text-sm shadow-black transition-all  bottom-16 right-28  border-solid border  bg-red-700 hover:bg-white hover:text-red-700"
					onClick={handleDelete}
				>
					Delete Note
				</button>
			</header>
			<form className="flex flex-col gap-4 mt-5">
				<input
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					type="text"
					placeholder="Title"
					autoFocus
					className="p-2 bg-transparent rounded-xl text-md border border-solid border-gray-500 font-pextrabold "
				/>
				<textarea
					value={details}
					onChange={(e) => setDetails(e.target.value)}
					rows="20"
					placeholder="Write your note..."
					className="p-3 bg-transparent rounded-2xl text-sm border border-solid border-gray-500 font-pregular "
				/>
				<div className="flex items-center gap-2">
					<label htmlFor="bgColor" className="text-sm font-medium">
						Select Background Color:
					</label>
					<select
						id="bgColor"
						value={bgColor}
						onChange={(e) => setBgColor(e.target.value)}
						className="p-1 border border-solid rounded-lg text-sm font-pbold"
					>
						<option value="white" style={{ color: "gray" }}>
							⚪ White
						</option>
						<option value="red" style={{ color: "red" }}>
							🔴 Red
						</option>
						<option value="orange" style={{ color: "orange" }}>
							🟠 Orange
						</option>
						<option value="yellow" style={{ color: "gold" }}>
							🟡 Yellow
						</option>
						<option value="green" style={{ color: "green" }}>
							🟢 Green
						</option>
						<option value="blue" style={{ color: "blue" }}>
							🔵 Blue
						</option>

						<option value="violet" style={{ color: "violet" }}>
							🟣 Violet
						</option>

						<option value="black" style={{ color: "black" }}>
							⚫ Black
						</option>
					</select>
				</div>
				<div className="flex items-center gap-4">
					<label htmlFor="txtColor" className="text-sm font-medium">
						Select Text Color:
					</label>
					<select
						id="txtColor"
						value={txtColor}
						onChange={(e) => setTxtColor(e.target.value)}
						className="p-1 border border-solid rounded-lg text-sm font-pbold"
					>
						<option value="black" style={{ color: "black" }}>
							⚫ Black
						</option>
						<option value="white" style={{ color: "gray" }}>
							⚪ White
						</option>
						<option value="red" style={{ color: "red" }}>
							🔴 Red
						</option>
						<option value="yellow" style={{ color: "gold" }}>
							🟡 Yellow
						</option>
						<option value="green" style={{ color: "green" }}>
							🟢 Green
						</option>
					</select>
				</div>
			</form>
		</section>
	);
};

export default EditNote;
