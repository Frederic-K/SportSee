import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
  ResponsiveContainer,
} from 'recharts'
import useAverageSessions from '../../../services/API/useAverageSessions'
import SpinLoader from '../../Loader/SpinLoader'

export default function AverageSessionsChart({ userId }) {
  const { isLoading, data, error } = useAverageSessions('user-sessions', userId)
  // console.log('dataChart', data)

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="chart__activity--averageSessions">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="averageSessions">
          <div className="averageSessions__title">
            <h3>Durée moyenne des sessions</h3>
          </div>
          <div className="averageSessions__chart">
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
                data={data}
                width={500}
                height={300}
                margin={{ top: 55, right: 10, left: 10, bottom: 10 }}
              >
                <XAxis
                  tickLine={false}
                  dataKey="day"
                  axisLine={false}
                  stroke="rgba(255, 255, 255, 0.66)"
                />
                <YAxis
                  hide={true}
                  axisLine={false}
                  tickLine={false}
                  domain={['dataMin-10', 'dataMax+10']}
                />
                <Tooltip
                  content={<CustomToolTip />}
                  cursor={<CursorShadow />}
                  // cursor={{ strokeWidth: 20, stroke: 'rgba(0, 0, 0, 0.1)' }}
                />
                <Line
                  type="monotone"
                  dataKey="sessionLength"
                  stroke="#fff"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    r: 4,
                    stroke: 'rgba(255,255,255, 0.6)',
                    strokeWidth: 7,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  )
}

function CustomToolTip({ active, payload }) {
  return active && payload ? (
    <div className="averageSessions__chart--toolTip">
      <div className="averageSessions__chart--toolTipText">{`${payload[0].value} min`}</div>
    </div>
  ) : null
}

function CursorShadow({ points }) {
  return (
    <Rectangle
      fill="black"
      opacity={0.1}
      x={points[1].x - 10}
      width={300}
      height={300}
    />
  )
}
