import { UserCircle } from 'lucide-react'
import { legacyAssetBasePath } from '@/data/assets'
import type { User } from '@/types/user'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type AvatarCoverProps = {
  user: User
}

/**
 * AvatarCover
 * req params: user:User
 * optional params: tidak ada
 * result: React element cover avatar dan dialog pilih avatar.
 */
function AvatarCover({ user }: AvatarCoverProps) {
  const avatarOptions = ['bear-3', 'lion-1', 'fox-1', 'cat-2', 'tiger-2', 'monkey-3']

  return (
    <div className="coverbox grd-2">
      <div className="avatar-mirror" style={{ backgroundImage: `url(${user.avatar})` }} />
      <img className="user-avatar" src={user.avatar} alt="" />
      <div className="personal-data">
        <h2>{user.name}</h2>
        <p>{user.division}</p>
      </div>
      <Dialog>
        <DialogTrigger render={<Button />}>
          <UserCircle size={15} />
          Change Avatar
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Avatar</DialogTitle>
          </DialogHeader>
          <div className="avatar-picker">
            {avatarOptions.map((avatar) => (
              <Button
                aria-label={avatar}
                className="avatar-choice"
                key={avatar}
                type="button"
                variant="ghost"
                style={{ backgroundImage: `url(${legacyAssetBasePath}/images/avatar/male/${avatar}.png)` }}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AvatarCover
