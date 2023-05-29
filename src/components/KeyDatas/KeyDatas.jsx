import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'
import KeyDataCard from '../KeyDataCard/KeyDataCard'

function KeyData({ userId }) {
  const { isLoading, data, error } = useUser(userId)

  // console.log('keyData', data.data?.keyData)

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="keyDatas__nutrition">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="keyDatas__nutrition--cards">
          {Object.entries(data.data.keyData).map((card, index) => {
            return <KeyDataCard key={`card-${index}`} data={card} />
          })}
        </div>
        // <div className="keyDatas__nutrition--cards">
        //   {Object.keys(data.data.keyData).map((card, index) => {
        //     return <KeyDataCard key={`card-${index}`} data={card} />
        //   })}
        // </div>
        // <div className="keyDatas__nutrition--cards">
        //   {Object.values(data.data.keyData).map((card, index) => {
        //     return <KeyDataCard key={`card-${index}`} data={card} />
        //   })}
        // </div>
      )}
    </div>
  )
}

export default KeyData
