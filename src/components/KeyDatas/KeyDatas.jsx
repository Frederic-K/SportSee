import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'

function KeyData(userId) {
  const { isLoading, data, error } = useUser(userId)

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="keyData">{isLoading ? <SpinLoader /> : <div></div>}</div>
  )
}

export default KeyData
