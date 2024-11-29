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
			<header className="fixed top-0 left-0 w-full flex items-center justify-center gap-8  z-20 shadow-md">
				<div className=" flex justify-between bg-primary  sm:p-5 p-2 sm:w-[40rem] w-full h-full">
					{!showSearch && <h2 className="font-pbold text-2xl">TEKNOTE...</h2>}
					{showSearch && (
						<input
							className="bg-transparent  border-primary border-solid rounded-lg text-white text-xl w-[30rem]"
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
						className="bg-black-200 rounded-lg text-sm p-2 color-white shadow-md transition-all hover:cursor-pointer hover:shadow-none hover:scale-125"
						onClick={() => setShowSearch((prevState) => !prevState)}
						aria-label={showSearch ? "Close Search" : "Open Search"}
					>
						{showSearch ? <GrClose className="text-red-700 " /> : <CiSearch />}
					</button>
				</div>
			</header>

			<div className="grid sm:grid-cols-3 grid-cols-2  gap-1 sm:pt-2 pt-5">
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
				className="flex items-center gap-4 sm:font-pbold font-pregular  rounded-xl p-2 sm:text-lg shadow-2xl transition-all fixed lg:bottom-8 bottom-2 right-12  border-solid border-2 bg-primary hover:bg-white hover:text-primary"
			>
				<h2 className="hidden sm:block">New Note</h2>

				<BsPlusLg />
			</Link>
		</section>
	);
};

export default Notes;
