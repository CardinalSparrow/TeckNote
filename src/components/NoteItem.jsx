import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
	NoteItem.propTypes = {
		note,
	};
	return (
		<Link
			to={`/edit/${note.id}`}
			className="bg-primary p-4 flex flex-col gap-4 cursor-pointer transition-all color-white"
		>
			<h4>{note.title}</h4>
			<p>{note.date}</p>
		</Link>
	);
};

export default NoteItem;
