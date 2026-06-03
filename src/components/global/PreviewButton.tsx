import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type PreviewButtonProps = {
  label: string
  image: string
}

/**
 * PreviewButton
 * req params: label:string, image:string
 * optional params: tidak ada
 * result: React element tombol preview dokumen dengan dialog gambar.
 */
function PreviewButton({ label, image }: PreviewButtonProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button className="btn-forest btn-xs" />}>{label}</DialogTrigger>
      <DialogContent className="image-dialog">
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>
        <div className="spy-image" style={{ backgroundImage: `url(${image})` }} />
        <Button className="btn-forest">
          <Download size={15} />
          Download
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default PreviewButton
