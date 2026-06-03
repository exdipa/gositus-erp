import { Link } from 'react-router-dom'
import StatusSwitch from '@/components/global/StatusSwitch'
import type { Client } from '@/types/client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type ClientTableProps = {
  clients: Client[]
}

/**
 * ClientTable
 * req params: clients:Client[]
 * optional params: tidak ada
 * result: React element table daftar client.
 */
function ClientTable({ clients }: ClientTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client, index) => (
          <TableRow key={client.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <Link className="flat-link" to={`/client/view?id=${client.id}`}>
                {client.type} {client.name}
              </Link>
            </TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>
              <span className="phone-flag" /> {client.phone}
            </TableCell>
            <TableCell>0</TableCell>
            <TableCell>{client.address}</TableCell>
            <TableCell>{client.city}</TableCell>
            <TableCell>{client.country}</TableCell>
            <TableCell>
              <StatusSwitch active={client.active} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ClientTable
