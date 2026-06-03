import { ArrowLeft, PenLine, Send } from 'lucide-react'
import ButtonLink from '@/components/global/ButtonLink'
import PageHeader from '@/components/global/PageHeader'
import ClientInformationSection from '@/pages/client/form/components/ClientInformationSection'
import ClientPicSection from '@/pages/client/form/components/ClientPicSection'
import { clients } from '@/data/mock-clients'
import { Button } from '@/components/ui/button'

type ClientFormPageProps = {
  mode: 'add' | 'view'
}

/**
 * ClientFormPage
 * req params: mode:'add'|'view'
 * optional params: tidak ada
 * result: React element halaman form client add/view statis.
 */
function ClientFormPage({ mode }: ClientFormPageProps) {
  const client = clients[0]

  return (
    <div className="main-content">
      <PageHeader
        title={mode === 'add' ? 'Add New Client' : 'View Client'}
        actions={
          <>
            <ButtonLink className="button-link btn-sea" to="/client">
              <ArrowLeft size={16} />
              Cancel
            </ButtonLink>
            <Button className="btn-forest">
              {mode === 'add' ? <Send size={16} /> : <PenLine size={16} />}
              {mode === 'add' ? 'Submit' : 'Update'}
            </Button>
          </>
        }
      />
      <div className="wingset">
        <ClientInformationSection client={client} />
        <ClientPicSection />
      </div>
    </div>
  )
}

export default ClientFormPage
