import { Lock, LogOut } from 'lucide-react'
import Field from '@/components/global/Field'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

/**
 * ProfileActions
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element tombol change password dan logout untuk profile.
 */
function ProfileActions() {
  return (
    <>
      <Dialog>
        <DialogTrigger render={<Button className="btn-sea" />}>
          <Lock size={15} />
          Change Password
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
          </DialogHeader>
          <Field label="Old Password">
            <Input type="password" />
          </Field>
          <Field label="New Password">
            <Input type="password" />
          </Field>
          <Field label="Repassword">
            <Input type="password" />
          </Field>
        </DialogContent>
      </Dialog>
      <Button className="btn-blood">
        <LogOut size={15} />
        Logout
      </Button>
    </>
  )
}

export default ProfileActions
