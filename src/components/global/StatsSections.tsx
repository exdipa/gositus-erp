import { History, Menu, PenLine } from 'lucide-react'
import StatBox from '@/components/global/StatBox'
import { Button } from '@/components/ui/button'

type StatsSectionsProps = {
  admin: boolean
}

/**
 * StatsSections
 * req params: admin:boolean
 * optional params: tidak ada
 * result: React element kumpulan statistik point, project, dan cuti.
 */
function StatsSections({ admin }: StatsSectionsProps) {
  return (
    <section className="wingset stats">
      <StatBox
        title="Peformance Points"
        actions={
          <>
            <Button className="btn-forest">
              <History size={15} />
              History
            </Button>
            {admin && (
              <Button className="btn-forest">
                <PenLine size={15} />
                Update
              </Button>
            )}
          </>
        }
        items={[
          ['0', 'Overall'],
          ['0', 'Last Month'],
          ['0', 'This Month'],
        ]}
      />
      <StatBox
        title="Project & Rewards"
        actions={
          <Button className="btn-forest">
            <History size={15} />
            History
          </Button>
        }
        items={[
          ['0', 'Total Project'],
          ['0', 'Complete'],
          ['0', 'Running'],
        ]}
      />
      <StatBox
        title="Cuti Tahunan"
        actions={
          <>
            <Button className="btn-forest" size="icon">
              <Menu size={15} />
            </Button>
            <Button className="btn-forest">
              <History size={15} />
              History
            </Button>
          </>
        }
        items={[
          ['0', 'Quota'],
          ['0', 'Used'],
          ['0', 'Available'],
        ]}
      />
    </section>
  )
}

export default StatsSections
