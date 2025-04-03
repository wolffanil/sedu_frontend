export function formatDate(date: Date | string): string {
	const dateTime = new Date(date)
	const day = dateTime.getDate().toString().padStart(2, '0')
	const month = (dateTime.getMonth() + 1).toString().padStart(2, '0')
	const year = dateTime.getFullYear().toString()

	return `${day}.${month}.${year}`
}
