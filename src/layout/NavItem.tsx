import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type NavItemProps = {
  to: string
  label: string
  icon: ReactNode
}

/**
 * NavItem
 * req params: to:string, label:string, icon:string
 * optional params: tidak ada
 * result: React element item navigasi dengan state active.
 */
function NavItem({ to, label, icon }: NavItemProps) {
  return (
    <NavLink className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} to={to}>
      <span>{icon}</span>
      <span>{label}</span>
    </NavLink>
  )
}

export default NavItem
