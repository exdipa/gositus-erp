import { Plus } from 'lucide-react'
import ButtonLink from '@/components/global/ButtonLink'
import PageHeader from '@/components/global/PageHeader'
import ClientSearchToolbar from '@/pages/client/list/components/ClientSearchToolbar'
import ClientTable from '@/pages/client/list/components/ClientTable'
import { clients } from '@/data/mock-clients'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

/**
 * ClientListPage
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element halaman daftar client statis.
 */
function ClientListPage() {
  return (
    <div className="main-content">
      <PageHeader
        title="Client"
        actions={
          <ButtonLink className="button-link btn-forest" to="/client/add">
            <Plus size={16} />
            Add New Client
          </ButtonLink>
        }
      />
      <Card className="datatable-card">
        <CardHeader className="tablehead">
          <ClientSearchToolbar />
        </CardHeader>
        <CardContent className="tablebox">
          <ClientTable clients={clients} />
        </CardContent>
      </Card>
    </div>
  )
}

export default ClientListPage
