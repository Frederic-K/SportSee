import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'

export default function DailyScoreChart({ userId }) {
  const { isLoading, data, error } = useUser('daily-score', userId)

  let dailyScore = data

  const dataScoreCircle = [
    { name: 'A', x: 100, fill: '#FBFBFB' },
    { name: 'B', x: dailyScore, fill: 'red' },
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
              //   cx="50%"
              //   cy="50%"
              innerRadius="100%"
              outerRadius="100%"
              barSize={10}
              // barGap={6}
              // barCategoryGap={6}
              data={dataScoreCircle}
              // domain={[0, 100]}
              startAngle={90}
              endAngle={450}
            >
              <RadialBar
                minAngle={15}
                clockWise
                dataKey="x"
                cornerRadius="50%"
              />
            </RadialBarChart>
          </ResponsiveContainer>
          {/* <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="100%"
              outerRadius="100%"
              barSize={10}
              startAngle={90}
              endAngle={450}
              data={dataScoreCircle}
            >
              <RadialBar
                minAngle={15}
                dataKey="x"
                cornerRadius="50%"
                background={{ fill: 'white' }}
              />
              <text
              x="50%"
              y="45%"
              textAnchor="middle"
              fontSize="26"
              fontWeight="500"
              fill="black"
            >
              {dailyScore}%
            </text>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              fontSize="16"
              fontWeight="400"
              fill={'#74798C'}
            >
              de votre
            </text>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              fontSize="16"
              fontWeight="400"
              fill={'#74798C'}
            >
              objectif
            </text>
            </RadialBarChart>
          </ResponsiveContainer> */}
        </div>
      )}
    </div>
  )
}
