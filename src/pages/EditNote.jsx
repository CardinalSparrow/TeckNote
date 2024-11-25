/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCreateDate from "../hooks/useCreateDate";
const EditNote = ({
	notes,
	setNotes,
	bgColor,
	setBgColor,
	txtColor,
	setTxtColor,
}) => {
	const { id } = useParams();
	const noteToEdit = notes.find((note) => note.id == id);

	const [title, setTitle] = useState(noteToEdit.title);
	const [details, setDetails] = useState(noteToEdit.details);
	const date = useCreateDate();
	// const [bgColor, setBgColor] = useState("white"); // Default color is white

	const navigate = useNavigate();

	const handleEdit = (e) => {
		e.preventDefault();
		if (title && details) {
			const note = { ...noteToEdit, title, details, date, bgColor, txtColor };

			const updatedNotes = notes.map((item) => {
				if (item.id == id) {
					item = note;
				}
				return item;
			});
			setNotes(updatedNotes);
			navigate("/");
		}
	};

	const handleDelete = () => {
		const updatedNotes = notes.filter((item) => item.id != id);
		setNotes(updatedNotes);
		navigate("/");
	};

	return (
		<section>
			<header className="flex justify-between items-center">
				<Link
					className=" rounded-xl p-4 text-2xl shadow-black transition-all  bottom-16 right-28  border-solid border-2  bg-secondary hover:bg-white hover:text-secondary"
					to="/"
				>
					<IoIosArrowBack />
				</Link>
				<button
					className="rounded-xl p-4 text-2xl shadow-black transition-all  bottom-16 right-28  border-solid border-2  bg-green-700 hover:bg-white hover:text-green-700"
					onClick={handleEdit}
				>
					Update Note
				</button>
				<button
					className="rounded-xl p-4 text-2xl shadow-black transition-all  bottom-16 right-28  border-solid border-2  bg-red-700 hover:bg-white hover:text-red-700"
					onClick={handleDelete}
				>
					Delete Note
				</button>
			</header>
			<form className="flex flex-col gap-8 mt-8">
				<input
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					type="text"
					placeholder="Title"
					autoFocus
					className="p-4 bg-transparent rounded-2xl text-2xl border-2 border-solid font-pextrabold "
				/>
				<textarea
					value={details}
					onChange={(e) => setDetails(e.target.value)}
					rows="30"
					placeholder="Write your note..."
					className="p-4 bg-transparent rounded-2xl text-xl border-2 border-solid font-pregular  "
				/>
				<div className="flex items-center gap-4">
					<label htmlFor="bgColor" className="text-xl font-medium">
						Select Background Color:
					</label>
					<select
						id="bgColor"
						value={bgColor}
						onChange={(e) => setBgColor(e.target.value)}
						className="p-2 border-2 border-solid rounded-lg text-lg font-pbold"
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
					</select>
				</div>
				<div className="flex items-center gap-4">
					<label htmlFor="bgColor" className="text-xl font-medium">
						Select Text Color:
					</label>
					<select
						id="txtColor"
						value={txtColor}
						onChange={(e) => setTxtColor(e.target.value)}
						className="p-2 border-2 border-solid rounded-lg text-lg font-pbold"
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
