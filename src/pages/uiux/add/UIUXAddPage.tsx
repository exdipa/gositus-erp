import { ArrowLeft, Save, Send } from 'lucide-react'
import ButtonLink from '@/components/global/ButtonLink'
import PageHeader from '@/components/global/PageHeader'
import UIUXButtonStandardsSection from '@/pages/uiux/add/components/UIUXButtonStandardsSection'
import UIUXChoiceStandardsSection from '@/pages/uiux/add/components/UIUXChoiceStandardsSection'
import UIUXInputStandardsSection from '@/pages/uiux/add/components/UIUXInputStandardsSection'
import { Button } from '@/components/ui/button'

/**
 * UIUXAddPage
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element halaman standar UI/UX untuk pola form/input.
 */
function UIUXAddPage() {
  return (
    <div className="main-content">
      <PageHeader
        title="UIUX Input Standard"
        actions={
          <>
            <ButtonLink className="button-link btn-sea" to="/uiux/list">
              <ArrowLeft size={16} />
              Back
            </ButtonLink>
            <Button variant="outline">
              <Save size={16} />
              Save Draft
            </Button>
            <Button className="btn-forest">
              <Send size={16} />
              Submit
            </Button>
          </>
        }
      />
      <div className="wingset uiux-wingset">
        <UIUXInputStandardsSection />
        <UIUXChoiceStandardsSection />
        <UIUXButtonStandardsSection />
      </div>
    </div>
  )
}

export default UIUXAddPage
