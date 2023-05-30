import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'

export default function Banner({ userId }) {
  const { isLoading, data, error } = useUser('firstName', userId)
  console.log('dataBanner', data)

  let firstName = data

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="dashboard__title">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <h1 className="dashboard__title--name">
          {/* Bonjour <span>{data.data.userInfos.firstName}</span> */}
          Bonjour <span>{firstName}</span>
          {/* Bonjour <span>{userId}</span> */}
        </h1>
      )}
      <h2 className="dashboard__title--caption">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}
