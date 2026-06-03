import { Eye, MoreHorizontal, PencilLine } from 'lucide-react'
import type { ColumnDef } from '@tanstack/react-table'
import StatusSwitch from '@/components/global/StatusSwitch'
import DataTableColumnHeader from '@/components/global/datatable/DataTableColumnHeader'
import type { UIUXStandardRow } from '@/types/uiux'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

/**
 * getUIUXColumns
 * req params: tidak ada
 * optional params: tidak ada
 * result: ColumnDef<UIUXStandardRow>[] konfigurasi kolom UIUX untuk TanStack Table.
 */
function getUIUXColumns(): ColumnDef<UIUXStandardRow>[] {
  return [
    {
      cell: ({ row }) => row.index + 1,
      enableSorting: false,
      header: 'No.',
      id: 'rowNumber',
    },
    {
      accessorKey: 'role',
      cell: ({ row }) => (
        <div className="cell-avatar">
          <img className="avatar-xs" src={row.original.avatar} alt="" />
          <span>{row.original.role}</span>
        </div>
      ),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Avatar Cell" />
      ),
    },
    {
      accessorKey: 'item',
      cell: ({ row }) => (
        <div className="cell-main">
          <strong>{row.original.item}</strong>
          <span>{row.original.category}</span>
        </div>
      ),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Item" />
      ),
    },
    {
      accessorKey: 'phone',
      cell: ({ row }) => (
        <>
          <span className="phone-flag" /> {row.original.phone}
        </>
      ),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone" />
      ),
    },
    {
      accessorKey: 'email',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
    },
    {
      accessorKey: 'tags',
      cell: ({ row }) => (
        <div className="tag-list">
          {row.original.tags.map((tag) => (
            <Badge className="tag-badge" key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      ),
      enableSorting: false,
      header: 'Tags',
    },
    {
      accessorKey: 'priority',
      cell: ({ row }) => (
        <Badge className={`priority-badge priority-${row.original.priority.toLowerCase()}`}>
          {row.original.priority}
        </Badge>
      ),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Priority" />
      ),
    },
    {
      accessorKey: 'status',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
    },
    {
      accessorKey: 'active',
      cell: ({ row }) => <StatusSwitch active={row.original.active} />,
      enableSorting: false,
      header: 'Switch',
    },
    {
      accessorKey: 'updatedAt',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Updated" />
      ),
    },
    {
      cell: () => (
        <div className="btn-group">
          <Button className="btn-sea btn-xs" size="sm">
            <Eye size={13} />
            View
          </Button>
          <Button className="btn-forest btn-xs" size="sm">
            <PencilLine size={13} />
            Edit
          </Button>
          <Button className="btn-xs" size="icon-sm" variant="outline">
            <MoreHorizontal size={14} />
          </Button>
        </div>
      ),
      enableSorting: false,
      header: 'Action',
      id: 'action',
    },
  ]
}

export { getUIUXColumns }
