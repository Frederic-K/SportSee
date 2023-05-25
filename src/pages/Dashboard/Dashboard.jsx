import Aside from '../../components/Aside/Aside'

function Dashboard() {
  return (
    <div className="dashboard">
      <Aside />
      <section className="dashboard__content">
        <div className="dashboard__title">
          <h1 className="dashboard__title--name">
            Bonjour <span>Thomas</span>
          </h1>
          <h2 className="dashboard__title--caption">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </h2>
        </div>
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
