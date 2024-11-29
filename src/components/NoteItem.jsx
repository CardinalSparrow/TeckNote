import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
	NoteItem.propTypes = {
		note,
	};
	return (
		<Link
			style={{ backgroundColor: note.bgColor, color: note.txtColor }}
			to={`/edit/${note.id}`}
			className=" p-2 flex flex-col  cursor-pointer transition-all relative sm:h-40 h-36"
		>
			<h3 className="font-pextrabold sm:text-2xl text-lg">
				{note.title.length > 15 ? note.title.substr(0, 15) + "..." : note.title}
			</h3>
			<h4 className="font-pextrabold sm:text-lg text-sm mt-1">
				{note.details.length > 35
					? note.details.substr(0, 35) + "..."
					: note.details}
			</h4>
			<p className="font-pmedium sm:text-sm  text-xs absolute right-2 bottom-1">
				{note.date}
			</p>
		</Link>
	);
};

export default NoteItem;
