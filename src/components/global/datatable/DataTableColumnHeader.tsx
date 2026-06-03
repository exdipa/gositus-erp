import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react'
import type { Column } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

type DataTableColumnHeaderProps<TData, TValue> = {
  column: Column<TData, TValue>
  title: string
}

/**
 * DataTableColumnHeader
 * req params: column:Column<TData,TValue>, title:string
 * optional params: tidak ada
 * result: React element header kolom dengan toggle sorting TanStack Table.
 */
function DataTableColumnHeader<TData, TValue>({
  column,
  title,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const sortDirection = column.getIsSorted()

  if (!column.getCanSort()) {
    return <span>{title}</span>
  }

  return (
    <Button
      className="table-sort-button"
      onClick={() => column.toggleSorting(sortDirection === 'asc')}
      type="button"
      variant="ghost"
    >
      {title}
      {sortDirection === 'asc' && <ArrowUp size={13} />}
      {sortDirection === 'desc' && <ArrowDown size={13} />}
      {!sortDirection && <ChevronsUpDown size={13} />}
    </Button>
  )
}

export default DataTableColumnHeader
