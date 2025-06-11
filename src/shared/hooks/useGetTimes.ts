import { useQuery } from '@tanstack/react-query'

import { type TDatePicker } from '../components/ui/date-element/type-date.type'
import { QUERY_KEYS } from '../enums/query.keys'
import { TimeSerice } from '../services/time.service'

export const useGetTimes = (
	type: TDatePicker,
	dateId: string | undefined,
	dateTime: string | undefined
) => {
	const isRecord = type !== 'master'

	const { data: timesByDateId, isLoading: isLoadingTimesByDateId } = useQuery(
		{
			queryKey: [QUERY_KEYS.GET_TIMES_BY_DATE_ID, dateId],
			queryFn: () => TimeSerice.getTimesByDateId(dateId || ''),
			enabled: !!dateId && !dateTime,
			staleTime: 5 * 60 * 1000

			// select: data => {
			// 	if (!isRecord) return data

			// 	return data.filter(time => !time.isBusy)
			// }
		}
	)

	const { data: timesByDateTime, isLoading: isLoadingTimesByDateTime } =
		useQuery({
			queryKey: [QUERY_KEYS.GET_TIMES_BY_DATE_TIME, dateTime],
			queryFn: () => TimeSerice.getTimesByDateTime(dateTime || ''),
			enabled: !dateId && !!dateTime,
			staleTime: 5 * 60 * 1000
			// select: data => {
			// 	if (!isRecord) return data

			// 	return data?.filter(time => !time.isBusy)
			// }
		})

	return {
		isLoadingTimes: isLoadingTimesByDateId || isLoadingTimesByDateTime,
		times: timesByDateId || timesByDateTime
	}
}
