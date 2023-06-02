import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import useUser from '../../../services/API/useUser'
import SpinLoader from '../../Loader/SpinLoader'

export default function DailyScoreChart({ userId }) {
  const { isLoading, data, error } = useUser('daily-score', userId)

  const radialBarArrayPerfData = [
    { name: 'A', x: 100, fill: 'white' },
    { name: 'B', x: data, fill: '#ff0000' },
  ]

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="chart__activity--score">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="chart__score">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="100%"
              outerRadius="100%"
              barSize={10}
              startAngle={90}
              endAngle={450}
              data={radialBarArrayPerfData}
            >
              <RadialBar minAngle={15} dataKey="x" cornerRadius="50%" />
              <text
                x="50%"
                y="45%"
                textAnchor="middle"
                dominantBaseline="top"
                className="chart__score--num"
              >
                {data}%
              </text>
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="chart__score--text"
              >
                de votre
              </text>
              <text
                x="50%"
                y="65%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="chart__score--text"
              >
                objectif
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}
