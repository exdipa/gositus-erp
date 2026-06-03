import { Eye, Lock, Mail } from 'lucide-react'
import ButtonLink from '@/components/global/ButtonLink'
import Field from '@/components/global/Field'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

/**
 * AuthPage
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element halaman login statis.
 */
function AuthPage() {
  return (
    <main className="sc-auth">
      <Card className="auth-box">
        <CardHeader className="auth-title">
          <div className="company">Gositus</div>
          <div className="project">/ERP</div>
        </CardHeader>
        <CardContent className="auth-fields">
          <Field label="Email" icon={<Mail size={15} />}>
            <Input defaultValue="admin@admin.com" />
          </Field>
          <Field label="Password" icon={<Lock size={15} />}>
            <div className="input-with-icon">
              <Input defaultValue="Go123456" type="password" />
              <Eye size={16} />
            </div>
          </Field>
          <ButtonLink className="button-link login-button" to="/client">
            <span>Open Access</span>
            <span>→</span>
          </ButtonLink>
          <div className="auth-notif">Checking Auth...</div>
        </CardContent>
      </Card>
    </main>
  )
}

export default AuthPage
