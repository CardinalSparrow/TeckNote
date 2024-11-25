import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
	NoteItem.propTypes = {
		note,
	};
	return (
		<Link
			style={{ backgroundColor: note.bgColor, color: note.txtColor }}
			to={`/edit/${note.id}`}
			className="bg-secondary p-4 flex flex-col gap-4 cursor-pointer transition-all"
		>
			<h4 className="font-pextrabold text-3xl">
				{note.title.length > 50 ? note.title.substr(0, 50) + "..." : note.title}
			</h4>
			<p className="font-pmedium text-xl">{note.date}</p>
		</Link>
	);
};

export default NoteItem;
