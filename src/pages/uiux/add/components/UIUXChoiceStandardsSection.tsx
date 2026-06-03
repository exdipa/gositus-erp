import { Bell, CheckCircle2, ToggleLeft } from 'lucide-react'
import Field from '@/components/global/Field'
import StatusSwitch from '@/components/global/StatusSwitch'
import WingCard from '@/components/global/WingCard'
import { Button } from '@/components/ui/button'

/**
 * UIUXChoiceStandardsSection
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element standar radio, checkbox, segmented choice, dan switch.
 */
function UIUXChoiceStandardsSection() {
  return (
    <WingCard title="Choice Standard">
      <div className="fields">
        <Field label="Radio Group">
          <div className="choice-grid">
            <label className="choice-line">
              <input defaultChecked name="standard-radio" type="radio" />
              <span>Default</span>
            </label>
            <label className="choice-line">
              <input name="standard-radio" type="radio" />
              <span>Secondary</span>
            </label>
            <label className="choice-line disabled">
              <input disabled name="standard-radio" type="radio" />
              <span>Disabled</span>
            </label>
          </div>
        </Field>
        <Field label="Checkbox Group">
          <div className="choice-grid">
            <label className="choice-line">
              <input defaultChecked type="checkbox" />
              <span>Can create</span>
            </label>
            <label className="choice-line">
              <input type="checkbox" />
              <span>Can update</span>
            </label>
            <label className="choice-line disabled">
              <input disabled type="checkbox" />
              <span>Locked permission</span>
            </label>
          </div>
        </Field>
        <Field label="Segmented Button">
          <div className="radio-row">
            <Button className="radio-blue" type="button">
              <CheckCircle2 size={15} />
              Active
            </Button>
            <Button type="button" variant="outline">
              <Bell size={15} />
              Pending
            </Button>
            <Button type="button" variant="outline">
              Archive
            </Button>
          </div>
        </Field>
        <Field label="Switch">
          <div className="switch-row">
            <StatusSwitch active />
            <span>Published</span>
          </div>
        </Field>
        <Field label="Switch Disabled Target" icon={<ToggleLeft size={14} />}>
          <div className="switch-row muted">
            <StatusSwitch active={false} />
            <span>Inactive state</span>
          </div>
        </Field>
      </div>
    </WingCard>
  )
}

export default UIUXChoiceStandardsSection
