import { useParams, Navigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Aside from '../../components/Aside/Aside'
import KeyData from '../../components/KeyDatas/KeyDatas'
import DailyScoreChart from '../../components/Chart/DailyScoreChart/DailyScoreChart'
import PerformanceChart from '../../components/Chart/PerformanceChart/PerformanceChart'
import AverageSessions from '../../components/Chart/AverageSessionsChart/AverageSessions'

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
            <div className="chart__dailyActivity"></div>
            <div className="chart__activity">
              {/* <div className="chart__activity--averageSessions"></div> */}
              <AverageSessions userId={id} />
              {/* <div className="chart__activity--performance"></div> */}
              <PerformanceChart userId={id} />
              {/* <div className="chart__activity--score"></div> */}
              <DailyScoreChart userId={id} />
            </div>
          </div>
          <KeyData userId={id} />
        </div>
      </section>
    </div>
  )
}
