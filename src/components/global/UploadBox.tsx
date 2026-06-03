import { Trash2, Upload } from 'lucide-react'
import Field from '@/components/global/Field'
import { Button } from '@/components/ui/button'

type UploadBoxProps = {
  label: string
  image: string
}

/**
 * UploadBox
 * req params: label:string, image:string
 * optional params: tidak ada
 * result: React element preview upload KTP/NPWP dengan kontrol browse/remove.
 */
function UploadBox({ label, image }: UploadBoxProps) {
  return (
    <Field label={label}>
      <div className="input-file">
        <div className="file-display" style={{ backgroundImage: `url(${image})` }} />
        <div className="file-control">
          <Button variant="ghost">
            <Upload size={15} />
            Browse
          </Button>
          <Button variant="ghost">
            <Trash2 size={15} />
            Remove
          </Button>
        </div>
      </div>
      <div className="note">Aspec Ratio 16:9 Recomended.</div>
    </Field>
  )
}

export default UploadBox
