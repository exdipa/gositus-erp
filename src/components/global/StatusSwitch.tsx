import { Button } from '@/components/ui/button'

type StatusSwitchProps = {
  active: boolean
}

/**
 * StatusSwitch
 * req params: active:boolean
 * optional params: tidak ada
 * result: React element tombol switch status aktif/nonaktif.
 */
function StatusSwitch({ active }: StatusSwitchProps) {
  return (
    <Button
      aria-label="status"
      className={`tba-switch ${active ? 'active' : ''}`}
      type="button"
      variant="ghost"
    />
  )
}

export default StatusSwitch
