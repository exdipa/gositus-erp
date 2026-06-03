import { BriefcaseBusiness, Menu, Palette, Users } from 'lucide-react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import NavItem from '@/layout/NavItem'
import ClientFormPage from '@/pages/client/form/ClientFormPage'
import ClientListPage from '@/pages/client/list/ClientListPage'
import ProfilePage from '@/pages/profile/ProfilePage'
import UIUXAddPage from '@/pages/uiux/add/UIUXAddPage'
import UIUXListPage from '@/pages/uiux/list/UIUXListPage'
import UserFormPage from '@/pages/user/form/UserFormPage'
import UserListPage from '@/pages/user/list/UserListPage'
import { users } from '@/data/mock-users'
import { Button } from '@/components/ui/button'

/**
 * AppShell
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element shell utama dengan header, menu, profile link, dan route private statis.
 */
function AppShell() {
  return (
    <div className="app-shell app-thema--light app-rounded--soft app-ctxsize--medium">
      <header className="app-header">
        <Link to="/client" className="brand">
          <span className="brand-logo" />
          <strong>
            Gositus<span>/ERP</span>
          </strong>
        </Link>
        <nav className="desktop-nav">
          <NavItem to="/client" label="Client" icon={<BriefcaseBusiness size={16} />} />
          <NavItem to="/user" label="User" icon={<Users size={16} />} />
          <NavItem to="/uiux/list" label="UIUX" icon={<Palette size={16} />} />
        </nav>
        <Link to="/profile" className="profile-link">
          <span>
            <strong>Ahmad Hendri</strong>
            <small>Frontend Programmer</small>
          </span>
          <img src={users[0].avatar} alt="" />
        </Link>
        <Button className="mobile-menu" variant="ghost" size="icon">
          <Menu size={20} />
        </Button>
      </header>
      <main className="cabin">
        <Routes>
          <Route path="/" element={<Navigate to="/client" replace />} />
          <Route path="/client" element={<ClientListPage />} />
          <Route path="/client/add" element={<ClientFormPage mode="add" />} />
          <Route path="/client/view" element={<ClientFormPage mode="view" />} />
          <Route path="/user" element={<UserListPage />} />
          <Route path="/user/add" element={<UserFormPage mode="add" />} />
          <Route path="/user/view" element={<UserFormPage mode="view" />} />
          <Route path="/uiux" element={<Navigate to="/uiux/list" replace />} />
          <Route path="/uiux/list" element={<UIUXListPage />} />
          <Route path="/uiux/add" element={<UIUXAddPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default AppShell
