import useUser from '../../../services/API/useUser'
import SpinLoader from '../../Loader/SpinLoader'

export default function DailyScoreChart({ userId }) {
  const { isLoading, data, error } = useUser('daily-score', userId)

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="chart__activity--performance">
      {isLoading ? <SpinLoader /> : <div className="performance">tic tac</div>}
    </div>
  )
}
