import { legacyAssetBasePath } from '@/data/assets'
import type { UIUXStandardRow } from '@/types/uiux'
import type { PaginationState, SortingState } from '@tanstack/react-table'

export type UIUXServerFilters = {
  category: string
  priority: string
  status: string
}

export type UIUXListQueryParams = {
  filters: UIUXServerFilters
  pagination: PaginationState
  sorting: SortingState
}

export type UIUXListQueryResult = {
  rows: UIUXStandardRow[]
  total: number
}

export const uiuxRows: UIUXStandardRow[] = [
  {
    active: true,
    avatar: `${legacyAssetBasePath}/images/avatar/male/bear-3.png`,
    category: 'Identity',
    email: 'designer@gosit.us',
    id: 1,
    item: 'Avatar + primary text',
    phone: '+62 811 2040 187',
    priority: 'High',
    progress: 'Ready',
    role: 'Design System',
    status: 'Published',
    tags: ['avatar', 'identity'],
    updatedAt: '03 Jun 2026',
  },
  {
    active: true,
    avatar: `${legacyAssetBasePath}/images/avatar/male/lion-1.png`,
    category: 'Contact',
    email: 'ops@gosit.us',
    id: 2,
    item: 'Phone cell with flag',
    phone: '+62 812 4040 280',
    priority: 'Medium',
    progress: 'Review',
    role: 'Operations',
    status: 'Draft',
    tags: ['phone', 'table'],
    updatedAt: '01 Jun 2026',
  },
  {
    active: false,
    avatar: `${legacyAssetBasePath}/images/avatar/male/fox-1.png`,
    category: 'State',
    email: 'qa@gosit.us',
    id: 3,
    item: 'Inactive row + switch',
    phone: '+62 813 3301 442',
    priority: 'Low',
    progress: 'Pending',
    role: 'QA',
    status: 'Archived',
    tags: ['switch', 'inactive'],
    updatedAt: '27 May 2026',
  },
  {
    active: true,
    avatar: `${legacyAssetBasePath}/images/avatar/male/tiger-2.png`,
    category: 'Action',
    email: 'admin@gosit.us',
    id: 4,
    item: 'Action button group',
    phone: '+62 856 7010 999',
    priority: 'High',
    progress: 'Ready',
    role: 'Administrator',
    status: 'Published',
    tags: ['button', 'action'],
    updatedAt: '24 May 2026',
  },
]

/**
 * fetchUIUXRows
 * req params: params:UIUXListQueryParams
 * optional params: tidak ada
 * result: Promise data list UIUX hasil simulasi server-side filter, sort, dan pagination.
 */
export async function fetchUIUXRows({
  filters,
  pagination,
  sorting,
}: UIUXListQueryParams): Promise<UIUXListQueryResult> {
  const filteredRows = uiuxRows.filter((row) => {
    const categoryMatched = filters.category === 'all'
      || row.category.toLowerCase() === filters.category
    const priorityMatched = filters.priority === 'all'
      || row.priority.toLowerCase() === filters.priority
    const statusMatched = filters.status === 'all'
      || row.status.toLowerCase() === filters.status

    return categoryMatched && priorityMatched && statusMatched
  })

  const [activeSort] = sorting
  const sortedRows = activeSort
    ? [...filteredRows].sort((firstRow, secondRow) => {
      const firstValue = String(firstRow[activeSort.id as keyof UIUXStandardRow] ?? '')
      const secondValue = String(secondRow[activeSort.id as keyof UIUXStandardRow] ?? '')
      const compareResult = firstValue.localeCompare(secondValue)

      return activeSort.desc ? compareResult * -1 : compareResult
    })
    : filteredRows

  const startIndex = pagination.pageIndex * pagination.pageSize
  const endIndex = startIndex + pagination.pageSize

  await new Promise((resolve) => {
    setTimeout(resolve, 120)
  })

  return {
    rows: sortedRows.slice(startIndex, endIndex),
    total: sortedRows.length,
  }
}
