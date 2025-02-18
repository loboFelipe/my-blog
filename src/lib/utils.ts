export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	if (isNaN(date.getTime())) {
		throw new Error(`Invalid date string: ${dateString}`);
	}
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date);
}
