import { ListFilter, RotateCcw, Search } from 'lucide-react'
import Field from '@/components/global/Field'
import type { UIUXServerFilters } from '@/data/mock-uiux'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type UIUXSearchToolbarProps = {
  filters: UIUXServerFilters
  globalSearch: string
  onFiltersChange: (filters: UIUXServerFilters) => void
  onGlobalSearchChange: (value: string) => void
}

/**
 * UIUXSearchToolbar
 * req params: filters:UIUXServerFilters, globalSearch:string, onFiltersChange:function, onGlobalSearchChange:function
 * optional params: tidak ada
 * result: React element toolbar global search dan server-side filter standar list.
 */
function UIUXSearchToolbar({
  filters,
  globalSearch,
  onFiltersChange,
  onGlobalSearchChange,
}: UIUXSearchToolbarProps) {
  /**
   * updateFilter
   * req params: key:keyof UIUXServerFilters, value:string
   * optional params: tidak ada
   * result: void update satu filter server-side.
   */
  function updateFilter(key: keyof UIUXServerFilters, value: string | null) {
    if (value === null) {
      return
    }

    onFiltersChange({
      ...filters,
      [key]: value,
    })
  }

  return (
    <>
      <div className="search-fields uiux-search-fields">
        <Field label="Global Search" icon={<Search size={14} />}>
          <Input
            onChange={(event) => onGlobalSearchChange(event.target.value)}
            placeholder="Ketik apapun untuk search data table"
            value={globalSearch}
          />
        </Field>
        <Field label="Filter Category" icon={<ListFilter size={14} />}>
          <Select
            onValueChange={(value) => updateFilter('category', value)}
            value={filters.category}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Category</SelectItem>
              <SelectItem value="identity">Identity</SelectItem>
              <SelectItem value="contact">Contact</SelectItem>
              <SelectItem value="state">State</SelectItem>
              <SelectItem value="action">Action</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Filter Priority">
          <Select
            onValueChange={(value) => updateFilter('priority', value)}
            value={filters.priority}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Filter Status">
          <Select
            onValueChange={(value) => updateFilter('status', value)}
            value={filters.status}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Button
        className="btn-sea"
        onClick={() => {
          onGlobalSearchChange('')
          onFiltersChange({ category: 'all', priority: 'all', status: 'all' })
        }}
        type="button"
      >
        <RotateCcw size={16} />
        Reset
      </Button>
    </>
  )
}

export default UIUXSearchToolbar
