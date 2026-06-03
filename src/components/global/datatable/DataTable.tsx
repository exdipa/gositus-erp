import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnDef,
  type OnChangeFn,
  type PaginationState,
  type SortingState,
} from '@tanstack/react-table'
import DataTablePagination from '@/components/global/datatable/DataTablePagination'
import { CardContent, CardFooter } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  globalFilter: string
  isLoading?: boolean
  onGlobalFilterChange: OnChangeFn<string>
  onPaginationChange: OnChangeFn<PaginationState>
  onSortingChange: OnChangeFn<SortingState>
  pageCount: number
  pagination: PaginationState
  rowCount: number
  sorting: SortingState
  tableClassName?: string
}

/**
 * getRowClassName
 * req params: rowData:TData
 * optional params: tidak ada
 * result: string class row inactive jika data memiliki active:false.
 */
function getRowClassName<TData>(rowData: TData) {
  if (typeof rowData === 'object' && rowData !== null && 'active' in rowData && rowData.active === false) {
    return 'inactive'
  }

  return ''
}

/**
 * DataTable
 * req params: columns:ColumnDef<TData,TValue>[], data:TData[], sorting:SortingState, pagination:PaginationState, globalFilter:string, rowCount:number, pageCount:number, onSortingChange:OnChangeFn<SortingState>, onPaginationChange:OnChangeFn<PaginationState>, onGlobalFilterChange:OnChangeFn<string>
 * optional params: isLoading:boolean = false, tableClassName:string = undefined
 * result: React element datatable reusable dengan TanStack Table, shadcn Table, global search, sort, dan pagination.
 */
function DataTable<TData, TValue>({
  columns,
  data,
  globalFilter,
  isLoading = false,
  onGlobalFilterChange,
  onPaginationChange,
  onSortingChange,
  pageCount,
  pagination,
  rowCount,
  sorting,
  tableClassName,
}: DataTableProps<TData, TValue>) {
  // TanStack Table returns stateful function helpers; this is expected for the table instance.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: 'includesString',
    manualPagination: true,
    manualSorting: true,
    onGlobalFilterChange,
    onPaginationChange,
    onSortingChange,
    pageCount,
    rowCount,
    state: {
      globalFilter,
      pagination,
      sorting,
    },
  })

  return (
    <>
      <CardContent className={`tablebox ${tableClassName ?? ''}`}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell className="empty-table-cell" colSpan={columns.length}>
                  Loading data...
                </TableCell>
              </TableRow>
            )}
            {!isLoading && table.getRowModel().rows.length === 0 && (
              <TableRow>
                <TableCell className="empty-table-cell" colSpan={columns.length}>
                  No records found
                </TableCell>
              </TableRow>
            )}
            {!isLoading && table.getRowModel().rows.map((row) => (
              <TableRow className={getRowClassName(row.original)} key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="table-footer">
        <DataTablePagination table={table} totalRows={rowCount} />
      </CardFooter>
    </>
  )
}

export default DataTable
