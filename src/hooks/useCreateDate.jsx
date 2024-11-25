const useCreateDate = () => {
	const dateObj = new Date();
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const monthName = monthNames[dateObj.getMonth()];
	const day = dateObj.getDate();
	const year = dateObj.getFullYear();
	const hours = String(dateObj.getHours()).padStart(2, "0");
	const minutes = String(dateObj.getMinutes()).padStart(2, "0");

	const date = `${monthName} ${day}, ${year} [${hours}:${minutes}]`;
	return date;
};

export default useCreateDate;
