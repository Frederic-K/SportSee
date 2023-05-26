import { useParams, Navigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Aside from '../../components/Aside/Aside'
import DailyActivity from '../../components/DailyActivity/DailyActivity'

function Dashboard() {
  const { id } = useParams()
  if (id !== '12' && id !== '18') {
    return <Navigate to="/fake-user" />
  }
  return (
    <div className="dashboard">
      <Aside />
      <section className="dashboard__content">
        <Banner />
        <div className="dashboard__datas">
          <div className="dashboard__datas--charts">
            <div className="chart__dailyActivity">
              <DailyActivity />
            </div>
            <div className="chart__activity">
              <div className="chart__activity--averageSessions"></div>
              <div className="chart__activity--performance"></div>
              <div className="chart__activity--score"></div>
            </div>
          </div>
          <div className="dashboard__datas--nutrition">
            {/* <div className="datas__nutrition--calories"></div>
            <div className="datas__nutrition--protein"></div>
            <div className="datas__nutrition--carbs"></div>
            <div className="datas__nutrition--fat"></div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
