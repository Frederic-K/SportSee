import usePerformance from '../../../services/API/usePerformance'
import SpinLoader from '../../Loader/SpinLoader'

export default function DailyScoreChart({ userId }) {
  const { isLoading, data, error } = usePerformance('daily-score', userId)

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="chart__activity--performance">
      {isLoading ? <SpinLoader /> : <div className="performance">Tadam</div>}
    </div>
  )
}
