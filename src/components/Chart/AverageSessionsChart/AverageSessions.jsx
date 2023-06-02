import useAverageSessions from '../../../services/API/useAverageSessions'
import SpinLoader from '../../Loader/SpinLoader'

export default function AverageSessionsChart({ userId }) {
  const { isLoading, data, error } = useAverageSessions('user-sessions', userId)
  console.log('dataChart', data)

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="chart__activity--averageSessions">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="averageSessions">Tadam</div>
      )}
    </div>
  )
}
