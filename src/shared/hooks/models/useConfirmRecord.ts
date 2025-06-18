import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useMemo } from 'react'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'
import { BookService } from '@/shared/services/book.service'
import { type ITime } from '@/shared/types/time.interface'
import { IUser } from '@/shared/types/user.interface'
import { notification } from '@/shared/utils/notification'

export const useConfirmRecord = ({
	timeId,
	dateId,
	setSelectTime,
	selectTime,
	onCloseModel,
	isActiveBonuses,
	setIsActiveBonusus
}: {
	timeId: string
	dateId: string
	selectTime: ITime
	setSelectTime: Dispatch<SetStateAction<ITime | undefined>>
	onCloseModel?: () => void
	isActiveBonuses: boolean
	setIsActiveBonusus: Dispatch<SetStateAction<boolean>>
}) => {
	const { isAuth, setUser } = useAuth()

	const queryClient = useQueryClient()

	const { mutateAsync: createBook, isPending: isLoadingCreateBook } =
		useMutation({
			mutationKey: [MUTATION_KEYS.CREATE_BOOK],
			mutationFn: () => BookService.create(timeId, isActiveBonuses),

			onSuccess: () => {
				queryClient.setQueryData(
					[QUERY_KEYS.GET_TIMES_BY_DATE_ID, dateId ?? ''],
					(times: ITime[]) =>
						times?.map(time =>
							time.id === timeId
								? { ...time, isBusy: true }
								: time
						)
				)

				queryClient.refetchQueries({
					queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_MY_BOOKS]
				})

				setSelectTime(undefined)

				if (isActiveBonuses) {
					const percent =
						Number(selectTime.date.service.procedure.price) * 0.1
					setUser(
						u =>
							({
								...u,
								bonuses: (u?.bonuses || 0) - percent
							}) as IUser
					)
				}
				setIsActiveBonusus(false)

				notification({
					type: 'success',
					message: 'Ваша запись успешно подтверждена!'
				})

				onCloseModel?.()
			},
			onError: (error: string) => {
				const errorMessage = getErrorMessage(error)

				setSelectTime(undefined)

				//@ts-ignore
				notification({ type: 'error', message: errorMessage?.error })

				onCloseModel?.()
			}
		})

	async function handleCreateBook() {
		if (!isAuth) return

		await createBook()
	}

	return useMemo(
		() => ({
			isLoadingCreateBook,
			handleCreateBook
		}),
		[isLoadingCreateBook, handleCreateBook]
	)
}
