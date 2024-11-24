import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CreateNote = () => {
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if ((title, details)) {
			console.log(title, details);
			setTitle("");
			setDetails("");
		}
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
					className="rounded-xl p-4 text-2xl shadow-black transition-all  bottom-16 right-28  border-solid border-2  bg-secondary hover:bg-white hover:text-secondary"
					onClick={handleSubmit}
				>
					Save
				</button>
			</header>
			<form className="flex flex-col gap-8 mt-8" onSubmit={handleSubmit}>
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
			</form>
		</section>
	);
};

export default CreateNote;
