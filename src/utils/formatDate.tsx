export const formatDate = (date: Date) => {
	const d = new Date(date);
	const dtf = new Intl.DateTimeFormat("en", {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});
	const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);

	return `${da} ${mo}`;
};

export const formatDateYear = (date: Date) =>{
	const d = new Date(date);
	const dtf = new Intl.DateTimeFormat("en", {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});
	const [{ value: mo }, , { value: da }, , { value: ye}] = dtf.formatToParts(d);

	return `${da} ${mo} ${ye}`;
}