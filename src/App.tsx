import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppShell from '@/layout/AppShell'
import AuthPage from '@/pages/auth/AuthPage'

/**
 * App
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element root router untuk auth dan app shell.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/*" element={<AppShell />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
