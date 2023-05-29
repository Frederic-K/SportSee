import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'
import KeyDataCard from '../KeyDataCard/KeyDataCard'

function KeyData({ userId }) {
  const { isLoading, data, error } = useUser(userId)

  console.log('keyDataData', data)
  console.log('keyData', data.data?.keyData)

  // const keyData = data.data?.keyData

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="keyData__nutrition">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="keyData__nutrition--card">
          {Object.keys(data.data.keyData).map((card, index) => {
            return <KeyDataCard key={`card-${index}`} data={card} />
          })}
        </div>
      )}
    </div>
  )
}

export default KeyData
