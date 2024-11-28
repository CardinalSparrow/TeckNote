/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
// import dummyNotes from "../dummy_notes";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";
import { useCallback, useEffect, useState } from "react";

const Notes = ({ notes }) => {
	const [showSearch, setShowSearch] = useState(false);
	const [text, setText] = useState("");
	const [filteredNotes, setFilteredNotes] = useState(notes);

	// const handleSearch = () => {
	// 	setFilteredNotes(
	// 		notes.filter((note) => {
	// 			if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
	// 				return note;
	// 			}
	// 		})
	// 	);
	// };

	// useEffect(handleSearch, [text, showSearch]);

	const handleSearch = useCallback(() => {
		setFilteredNotes(
			notes.filter((note) =>
				note.title?.toLowerCase().includes(text.toLowerCase())
			)
		);
	}, [notes, text]);

	useEffect(() => {
		handleSearch();
	}, [handleSearch]);

	return (
		<section>
			<header className="fixed top-0 left-0 w-full flex items-center justify-center gap-8 p-6  bg-primary z-20 shadow-md">
				{!showSearch && <h2 className="font-pbold text-3xl">TEKNOTE...</h2>}
				{showSearch && (
					<input
						className="bg-transparent p-3 border-primary border-solid rounded-lg text-white text-2xl w-full mr-6"
						type="text"
						autoFocus
						placeholder="Keyword..."
						aria-label="Search Notes"
						onChange={(e) => {
							setText(e.target.value);
							handleSearch();
						}}
					/>
				)}
				<button
					className="bg-black-200 rounded-2xl text-2xl p-3 color-white shadow-md transition-all hover:cursor-pointer hover:shadow-none hover:scale-125"
					onClick={() => setShowSearch((prevState) => !prevState)}
					aria-label={showSearch ? "Close Search" : "Open Search"}
				>
					{showSearch ? <GrClose className="text-red-700 " /> : <CiSearch />}
				</button>
			</header>
			<div className="grid grid-cols-2 sm:gap-5 gap-2 pt-20 sm:pt-2">
				{filteredNotes.length == 0 && (
					<p className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
						No notes found
					</p>
				)}
				{filteredNotes.map((note) => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
			<Link
				to="/new-note"
				className="flex items-center gap-4 sm:font-pbold font-pregular text-sm rounded-xl p-4 sm:text-2xl shadow-2xl transition-all fixed bottom-16 right-28  border-solid border-2 bg-primary hover:bg-white hover:text-primary"
			>
				<h2>New Note</h2>

				<BsPlusLg />
			</Link>
		</section>
	);
};

export default Notes;
