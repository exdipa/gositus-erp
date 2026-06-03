import { Plus } from 'lucide-react'
import ButtonLink from '@/components/global/ButtonLink'
import PageHeader from '@/components/global/PageHeader'
import UserSearchToolbar from '@/pages/user/list/components/UserSearchToolbar'
import UserTable from '@/pages/user/list/components/UserTable'
import { users } from '@/data/mock-users'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

/**
 * UserListPage
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element halaman daftar user statis.
 */
function UserListPage() {
  return (
    <div className="main-content">
      <PageHeader
        title="User List"
        actions={
          <ButtonLink className="button-link btn-forest" to="/user/add">
            <Plus size={16} />
            Add New User
          </ButtonLink>
        }
      />
      <Card className="datatable-card">
        <CardHeader className="tablehead">
          <UserSearchToolbar />
        </CardHeader>
        <CardContent className="tablebox">
          <UserTable users={users} />
        </CardContent>
      </Card>
    </div>
  )
}

export default UserListPage
