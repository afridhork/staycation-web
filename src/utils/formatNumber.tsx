export default (number: number): string => {
	const formatNumbering = new Intl.NumberFormat("id-ID");
	return formatNumbering.format(number);
};
