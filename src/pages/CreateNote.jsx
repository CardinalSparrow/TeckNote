import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CreateNote = () => {
	return (
		<section>
			<header className="flex justify-between items-center">
				<Link className=" btn bg-secondary" to="/">
					<IoIosArrowBack />
				</Link>
				<button className="btn bg-secondary">Save</button>
			</header>
			<form className="flex flex-col gap-8 mt-8">
				<input
					type="text"
					placeholder="Title"
					autoFocus
					className="p-4 bg-transparent rounded-2xl text-2xl border-2 border-solid font-pextrabold "
				/>
				<textarea
					rows="30"
					placeholder="Write your note..."
					className="p-4 bg-transparent rounded-2xl text-xl border-2 border-solid font-pregular  "
				></textarea>
			</form>
		</section>
	);
};

export default CreateNote;
