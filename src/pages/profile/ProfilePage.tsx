import { ArrowLeft, PenLine } from 'lucide-react'
import ButtonLink from '@/components/global/ButtonLink'
import PageHeader from '@/components/global/PageHeader'
import StatsSections from '@/components/global/StatsSections'
import UserFormContent from '@/pages/user/form/UserFormContent'
import { users } from '@/data/mock-users'
import { Button } from '@/components/ui/button'

/**
 * ProfilePage
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element halaman profile user statis.
 */
function ProfilePage() {
  return (
    <div className="main-content">
      <PageHeader
        title="User Profile"
        actions={
          <>
            <ButtonLink className="button-link btn-sea" to="/user">
              <ArrowLeft size={16} />
              Back
            </ButtonLink>
            <Button className="btn-forest">
              <PenLine size={16} />
              Update
            </Button>
          </>
        }
      />
      <UserFormContent user={users[0]} mode="profile" />
      <StatsSections admin={false} />
    </div>
  )
}

export default ProfilePage
