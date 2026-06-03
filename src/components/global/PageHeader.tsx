import type React from 'react'

type PageHeaderProps = {
  title: string
  actions?: React.ReactNode
}

/**
 * PageHeader
 * req params: title:string
 * optional params: actions:React.ReactNode = undefined
 * result: React element header halaman dengan judul dan area tombol aksi.
 */
function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <section className="wingled">
      <div className="title-ax1">{title}</div>
      <div className="header-actions">{actions}</div>
    </section>
  )
}

export default PageHeader
