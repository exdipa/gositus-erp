import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

type DataTablePaginationProps<TData> = {
  table: Table<TData>
  totalRows: number
}

/**
 * DataTablePagination
 * req params: table:Table<TData>, totalRows:number
 * optional params: tidak ada
 * result: React element pagination datatable berbasis TanStack Table.
 */
function DataTablePagination<TData>({ table, totalRows }: DataTablePaginationProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const firstRow = totalRows === 0 ? 0 : pageIndex * pageSize + 1
  const lastRow = Math.min(totalRows, (pageIndex + 1) * pageSize)
  const pageCount = table.getPageCount()

  return (
    <>
      <div className="table-meta">
        Showing {firstRow}-{lastRow} from {totalRows} records
      </div>
      <div className="pagination">
        <Button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          size="icon-sm"
          type="button"
          variant="outline"
        >
          <ChevronLeft size={14} />
        </Button>
        {Array.from({ length: pageCount }).map((_, index) => (
          <Button
            className={`pagination-page ${pageIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => table.setPageIndex(index)}
            size="sm"
            type="button"
            variant={pageIndex === index ? 'default' : 'outline'}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          size="icon-sm"
          type="button"
          variant="outline"
        >
          <ChevronRight size={14} />
        </Button>
      </div>
    </>
  )
}

export default DataTablePagination
