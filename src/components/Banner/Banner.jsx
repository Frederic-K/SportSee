import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'
import Error404 from '../../pages/404/Error404'

function Banner({ userId }) {
  const { data, isLoading, error } = useUser(userId)

  if (error) {
    return <Error404 />
  }

  // const firstName = data.data?.userInfos.firstName

  // const firstName = data.data.userInfos.firstName

  // console.log('firstName', firstName)

  return (
    <div className="dashboard__title">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <h1 className="dashboard__title--name">
          Bonjour <span>{data.data.userInfos.firstName}</span>
          {/* Bonjour <span>{firstName}</span> */}
        </h1>
      )}
      <h2 className="dashboard__title--caption">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}

export default Banner
