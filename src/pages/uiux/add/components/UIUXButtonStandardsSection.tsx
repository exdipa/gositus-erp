import { Download, Eye, Plus, Trash2, Upload } from 'lucide-react'
import WingBox from '@/components/global/WingBox'
import { Button } from '@/components/ui/button'

/**
 * UIUXButtonStandardsSection
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element standar variasi button untuk action form.
 */
function UIUXButtonStandardsSection() {
  return (
    <WingBox title="Button Standard">
      <div className="button-standard-grid">
        <Button className="btn-forest">
          <Plus size={16} />
          Primary
        </Button>
        <Button className="btn-sea">
          <Eye size={16} />
          Secondary
        </Button>
        <Button className="btn-blood">
          <Trash2 size={16} />
          Danger
        </Button>
        <Button variant="outline">
          <Download size={16} />
          Outline
        </Button>
        <Button variant="ghost">
          <Upload size={16} />
          Ghost
        </Button>
        <Button disabled>
          Disabled
        </Button>
        <Button className="btn-forest" size="icon">
          <Plus size={16} />
        </Button>
        <Button className="btn-sea btn-xs" size="sm">
          Small
        </Button>
      </div>
    </WingBox>
  )
}

export default UIUXButtonStandardsSection
