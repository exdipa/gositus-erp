import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import type { PaginationState, SortingState } from '@tanstack/react-table'
import ButtonLink from '@/components/global/ButtonLink'
import DataTable from '@/components/global/datatable/DataTable'
import PageHeader from '@/components/global/PageHeader'
import { getUIUXColumns } from '@/pages/uiux/list/components/UIUXColumns'
import UIUXSearchToolbar from '@/pages/uiux/list/components/UIUXSearchToolbar'
import { fetchUIUXRows, type UIUXServerFilters } from '@/data/mock-uiux'
import { Card, CardHeader } from '@/components/ui/card'

/**
 * UIUXListPage
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element halaman standar UI/UX untuk pola list.
 */
function UIUXListPage() {
  const [globalSearch, setGlobalSearch] = useState('')
  const [filters, setFilters] = useState<UIUXServerFilters>({
    category: 'all',
    priority: 'all',
    status: 'all',
  })
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 2,
  })
  const columns = useMemo(() => getUIUXColumns(), [])
  const query = useQuery({
    queryFn: () => fetchUIUXRows({ filters, pagination, sorting }),
    queryKey: ['uiux-rows', filters, pagination, sorting],
  })
  const rowCount = query.data?.total ?? 0
  const pageCount = Math.max(1, Math.ceil(rowCount / pagination.pageSize))

  return (
    <div className="main-content">
      <PageHeader
        title="UIUX List Standard"
        actions={
          <ButtonLink className="button-link btn-forest" to="/uiux/add">
            <Plus size={16} />
            Add Standard
          </ButtonLink>
        }
      />
      <Card className="datatable-card">
        <CardHeader className="tablehead">
          <UIUXSearchToolbar
            filters={filters}
            globalSearch={globalSearch}
            onFiltersChange={(nextFilters) => {
              setFilters(nextFilters)
              setPagination((currentPagination) => ({ ...currentPagination, pageIndex: 0 }))
            }}
            onGlobalSearchChange={setGlobalSearch}
          />
        </CardHeader>
        <DataTable
          columns={columns}
          data={query.data?.rows ?? []}
          globalFilter={globalSearch}
          isLoading={query.isFetching}
          onGlobalFilterChange={setGlobalSearch}
          onPaginationChange={setPagination}
          onSortingChange={setSorting}
          pageCount={pageCount}
          pagination={pagination}
          rowCount={rowCount}
          sorting={sorting}
          tableClassName="uiux-tablebox"
        />
      </Card>
    </div>
  )
}

export default UIUXListPage
