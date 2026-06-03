import type React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type WingBoxProps = {
  title: string
  actions?: React.ReactNode
  children: React.ReactNode
}

/**
 * WingBox
 * req params: title:string, children:React.ReactNode
 * optional params: actions:React.ReactNode = undefined
 * result: React element box konten bergaya wingbox lama.
 */
function WingBox({ title, actions, children }: WingBoxProps) {
  return (
    <Card className="wingbox">
      <CardHeader className="wingbox-header">
        <CardTitle>{title}</CardTitle>
        <div className="btn-group">{actions}</div>
      </CardHeader>
      <CardContent className="wingbox-content">{children}</CardContent>
    </Card>
  )
}

export default WingBox
