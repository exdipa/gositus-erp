import type React from 'react'
import WingBox from '@/components/global/WingBox'

type StatBoxProps = {
  title: string
  actions: React.ReactNode
  items: string[][]
}

/**
 * StatBox
 * req params: title:string, actions:React.ReactNode, items:string[][]
 * optional params: tidak ada
 * result: React element wingbox berisi counter statistik.
 */
function StatBox({ title, actions, items }: StatBoxProps) {
  return (
    <WingBox title={title} actions={actions}>
      <div className="counter-boxs">
        {items.map(([value, label]) => (
          <div className="counter-box" key={label}>
            <h2>{value}</h2>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </WingBox>
  )
}

export default StatBox
