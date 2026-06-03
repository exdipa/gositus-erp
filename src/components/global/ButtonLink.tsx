import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type ButtonLinkProps = Omit<ComponentProps<typeof Button>, 'children' | 'render'> & {
  children: ReactNode
  to: string
}

/**
 * ButtonLink
 * req params: children:ReactNode, to:string
 * optional params: props:ButtonProps = {}
 * result: React element link navigasi dengan model tombol shadcn.
 */
function ButtonLink({ children, to, ...props }: ButtonLinkProps) {
  return (
    <Button render={<Link to={to} />} {...props}>
      {children}
    </Button>
  )
}

export default ButtonLink
