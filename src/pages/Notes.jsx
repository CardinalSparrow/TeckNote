import { CiSearch } from "react-icons/ci";
import dummyNotes from "../dummy_notes";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";

const Notes = () => {
	return (
		<section>
			<header className="flex items-center justify-center p-6  bg-primary z-20">
				<h2>TEKNOTE...</h2>
				{/* <input type="text" autoFocus placeholder="Keyword..." /> */}
				<button className="bg-black-200 rounded-2xl text-2xl p-3 color-white shadow-md transition-all hover:cursor-pointer hover:shadow-none">
					<CiSearch />
				</button>
			</header>
			<div className="grid grid-cols-2 gap-5">
				{dummyNotes.map((note) => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
			<Link to="/new-note" className="btn fixed bottom-16 right-28 p-4">
				<BsPlusLg />
			</Link>
		</section>
	);
};

export default Notes;
