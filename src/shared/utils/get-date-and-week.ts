export function getWeek(isoDate: string): string {
	const date = new Date(isoDate)

	const daysOfWeek: string[] = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

	const dayOfWeek = daysOfWeek[date.getUTCDay()]

	return dayOfWeek
}

export function getDayAndManth(isoDate: string): string {
	const date = new Date(isoDate)

	const day = date.getUTCDate()
	const month = date.getUTCMonth() + 1

	const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}`

	return formattedDate
}
