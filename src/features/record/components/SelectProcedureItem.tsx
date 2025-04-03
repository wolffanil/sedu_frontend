import { SelectItem } from '@/shared/components/common/Select'
import { IProcedure } from '@/shared/types/procedure.type'

interface selectProcedureItemProps {
	procedure: IProcedure
}

function SelectProcedureItem({ procedure }: selectProcedureItemProps) {
	return <SelectItem value={procedure.id}>{procedure.title}</SelectItem>
}

export default SelectProcedureItem
