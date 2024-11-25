import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
	NoteItem.propTypes = {
		note,
	};
	return (
		<Link
			style={{ backgroundColor: note.bgColor, color: note.txtColor }}
			to={`/edit/${note.id}`}
			className="bg-secondary p-4 flex flex-col gap-4 cursor-pointer transition-all relative h-60"
		>
			<h3 className="font-pextrabold text-4xl">
				{note.title.length > 20 ? note.title.substr(0, 20) + "..." : note.title}
			</h3>
			<h4 className="font-pextrabold text-3xl">
				{note.details.length > 50
					? note.details.substr(0, 50) + "..."
					: note.details}
			</h4>
			<p className="font-pmedium text-xl pt-8 absolute right-8 bottom-2">
				{note.date}
			</p>
		</Link>
	);
};

export default NoteItem;
