import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
	NoteItem.propTypes = {
		note,
	};
	return (
		<Link
			style={{ backgroundColor: note.bgColor, color: note.txtColor }}
			to={`/edit/${note.id}`}
			className="bg-secondary p-4 flex flex-col gap-4 cursor-pointer transition-all relative sm:h-60 h-40"
		>
			<h3 className="font-pextrabold sm:text-4xl text-xl">
				{note.title.length > 20 ? note.title.substr(0, 20) + "..." : note.title}
			</h3>
			<h4 className="font-pextrabold sm:text-3xl text-lg mt-1">
				{note.details.length > 30
					? note.details.substr(0, 30) + "..."
					: note.details}
			</h4>
			<p className="font-pmedium sm:text-xl text-sm   absolute right-8 bottom-2">
				{note.date}
			</p>
		</Link>
	);
};

export default NoteItem;
