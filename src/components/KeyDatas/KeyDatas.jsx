import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'
import KeyDataCard from '../KeyDataCard/KeyDataCard'

export default function KeyData({ userId }) {
  const { isLoading, data, error } = useUser('key-data', userId)

  let keyData = data

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  // console.log('keyData-1', Object.values(keyData))
  // console.log('keyData-2', Object.keys(keyData))

  console.log('calorieCount', keyData.calorieCount)

  return (
    <div className="keyDatas__nutrition">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="keyDatas__nutrition--cards">
          {Object.entries(keyData).map((card, index) => {
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
