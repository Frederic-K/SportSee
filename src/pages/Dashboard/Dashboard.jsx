import { useParams, Navigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Aside from '../../components/Aside/Aside'
import DailyActivity from '../../components/DailyActivity/DailyActivity'
import KeyData from '../../components/KeyDatas/KeyDatas'

export default function Dashboard() {
  const { id } = useParams()

  if (id !== '12' && id !== '120' && id !== '18' && id !== '180') {
    // return <Navigate to="/fake-user" />
    return <Navigate to="*" />
  }
  return (
    <div className="dashboard">
      <Aside />
      <section className="dashboard__content">
        <Banner userId={id} />
        <div className="dashboard__datas">
          <div className="dashboard__datas--charts">
            <div className="chart__dailyActivity">
              <DailyActivity userId={id} />
            </div>
            <div className="chart__activity">
              <div className="chart__activity--averageSessions"></div>
              <div className="chart__activity--performance"></div>
              <div className="chart__activity--score"></div>
            </div>
          </div>
          <div className="dashboard__datas--nutrition">
            <KeyData userId={id} />
          </div>
        </div>
      </section>
    </div>
  )
}
