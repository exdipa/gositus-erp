import type { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type WingCardProps = {
  actions?: ReactNode
  children: ReactNode
  title: string
}

/**
 * WingCard
 * req params: title:string, children:ReactNode
 * optional params: actions:ReactNode = undefined
 * result: React element card grouping standar dengan header aksen warna.
 */
function WingCard({ actions, children, title }: WingCardProps) {
  return (
    <Card className='p-0'>
      <CardHeader className='bg-white border-b p-4'>
        <CardTitle>{title}</CardTitle>
        {actions && <div className="btn-group">{actions}</div>}
      </CardHeader>
      <CardContent className='p-4 flex flex-col gap-2'>{children}</CardContent>
    </Card>
  )
}

export default WingCard
