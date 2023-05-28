import getUser from '../../utils/getUser'
// import useFetch from '../../utils/useFetch'
// import Loader from '../Loader/Loader'
// import Error404 from '../../pages/404/Error404'

function Banner({ userId }) {
  console.log('userId', userId)

  const { data } = getUser(userId)

  console.log('bannerDAta', data)

  return (
    <div className="dashboard__title">
      <h1 className="dashboard__title--name">
        {/* Bonjour <span>{data.data.userInfos.firstName}</span> */}
        Bonjour <span>{userId}</span>
      </h1>
      <h2 className="dashboard__title--caption">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}

export default Banner
