import { CirclePlus, Plus, Trash2, UserCircle } from 'lucide-react'
import Field from '@/components/global/Field'
import WingBox from '@/components/global/WingBox'
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
 * ClientPicSection
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element section PIC client dengan popup search PIC.
 */
function ClientPicSection() {
  return (
    <WingBox title="Client PIC">
      <Field label="PIC List">
        <div className="pic-grid">
          <div className="person-box">
            <UserCircle size={42} />
            <div>
              <strong>Ahmad Hendri</strong>
              <span>ahmad@gosit.us</span>
              <Button variant="link" className="pic-position">
                Project Owner
              </Button>
            </div>
            <Button variant="ghost" size="icon">
              <Trash2 size={17} />
            </Button>
          </div>
          <Dialog>
            <DialogTrigger render={<Button className="box-empty" variant="ghost" />}>
              <span>New PIC</span>
              <CirclePlus size={26} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>PIC List</DialogTitle>
              </DialogHeader>
              <div className="dialog-search">
                <Input placeholder="Cari PIC" />
                <Button className="btn-forest">
                  <Plus size={15} />
                  Add New PIC
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Field>
    </WingBox>
  )
}

export default ClientPicSection
