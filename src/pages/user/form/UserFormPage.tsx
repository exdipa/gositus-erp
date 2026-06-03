import { ArrowLeft, PenLine, Send } from 'lucide-react'
import ButtonLink from '@/components/global/ButtonLink'
import PageHeader from '@/components/global/PageHeader'
import StatsSections from '@/components/global/StatsSections'
import UserFormContent from '@/pages/user/form/UserFormContent'
import { users } from '@/data/mock-users'
import { Button } from '@/components/ui/button'

type UserFormPageProps = {
  mode: 'add' | 'view'
}

/**
 * UserFormPage
 * req params: mode:'add'|'view'
 * optional params: tidak ada
 * result: React element halaman user add/view statis.
 */
function UserFormPage({ mode }: UserFormPageProps) {
  const user = users[0]

  return (
    <div className="main-content">
      <PageHeader
        title={mode === 'add' ? 'Add New User' : 'User View'}
        actions={
          <>
            <ButtonLink className="button-link btn-sea" to="/user">
              <ArrowLeft size={16} />
              {mode === 'add' ? 'Cancel' : 'Back'}
            </ButtonLink>
            <Button className="btn-forest">
              {mode === 'add' ? <Send size={16} /> : <PenLine size={16} />}
              {mode === 'add' ? 'Submit' : 'Update'}
            </Button>
          </>
        }
      />
      <UserFormContent user={user} mode={mode} />
      {mode === 'view' && <StatsSections admin />}
    </div>
  )
}

export default UserFormPage
