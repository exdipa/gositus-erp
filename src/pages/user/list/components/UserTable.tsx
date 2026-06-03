import { Link } from 'react-router-dom'
import PreviewButton from '@/components/global/PreviewButton'
import StatusSwitch from '@/components/global/StatusSwitch'
import { legacyAssetBasePath } from '@/data/assets'
import type { User } from '@/types/user'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type UserTableProps = {
  users: User[]
}

/**
 * UserTable
 * req params: users:User[]
 * optional params: tidak ada
 * result: React element table daftar user.
 */
function UserTable({ users }: UserTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No.</TableHead>
          <TableHead />
          <TableHead>Nama</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead>Work</TableHead>
          <TableHead>Birthday</TableHead>
          <TableHead>Place</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow className={user.active ? '' : 'inactive'} key={user.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <img className="avatar-xs" src={user.avatar} alt="" />
            </TableCell>
            <TableCell>
              <div className="user-name-cell">
                <Link className={`flat-link ${user.gender}`} to={`/user/view?id=${user.id}`}>
                  {user.name}
                </Link>
                <div className="btn-group">
                  <PreviewButton label="KTP" image={`${legacyAssetBasePath}/ktp/ktp-ahmad_hendri.jpg`} />
                  <PreviewButton label="NPWP" image={`${legacyAssetBasePath}/npwp/npwp-ahmad_hendri.jpg`} />
                </div>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <span className="phone-flag" /> {user.phone}
            </TableCell>
            <TableCell>{user.joinDate}</TableCell>
            <TableCell>2y</TableCell>
            <TableCell>{user.dob}</TableCell>
            <TableCell>{user.pob}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.division}</TableCell>
            <TableCell>
              <StatusSwitch active={user.active} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default UserTable
