import Aside from '../../components/Aside/Aside'

function Dashboard() {
  return (
    <div className="dashboard">
      <Aside />
      <section className="dashboard__content">
        <h1 className="dashboard__title">TEST Dashboard</h1>
        <div className="dashboard__datas">
          <div classNama="dasboard__datas--charts">
            <div className="chart__dailyActivity"></div>
            <div className="chart__activity">
              <div className="chart__activity--averageSessions"></div>
              <div className="chart__activity--performance"></div>
              <div className="chart__activity--score"></div>
            </div>
          </div>
          <div className="dashboard__datas--nutrition">
            <div className="datas__nutrition--calories"></div>
            <div className="datas__nutrition--protein"></div>
            <div className="datas__nutrition--carbs"></div>
            <div className="datas__nutrition--fat"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
