import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'

export default function KeyData({ userId }) {
  const { isLoading, data, error } = useUser('key-data', userId)

  console.log('keyData', data)

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="keyDatas__nutrition">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="keyDatas__nutrition--cards">
          <div className="nutrition__card"></div>
          <div className="nutrition__card"></div>
          <div className="nutrition__card"></div>
          <div className="nutrition__card"></div>
        </div>
      )}
    </div>
  )
}
