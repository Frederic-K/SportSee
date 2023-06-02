import TickRender from '../../../services/model/RadarChartTickRender'
import {
  PolarAngleAxis,
  // PolarRadiusAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'

import usePerformance from '../../../services/API/usePerformance'
import SpinLoader from '../../Loader/SpinLoader'

export default function PerformanceChart({ userId }) {
  const { isLoading, data, error } = usePerformance('user-performance', userId)
  // console.log('dataChart', data)

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="chart__activity--performance">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="chart__performance">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
              <Radar
                dataKey="value"
                fill="#ff0000"
                fillOpacity={0.7}
                stroke="#ff0000"
              />
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey="kind"
                stroke="white"
                // dy={3}
                tickLine={false}
                tick={(props) => TickRender(props)}
              />
              {/* <PolarRadiusAxis angle={0} stroke="white" /> */}
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}
