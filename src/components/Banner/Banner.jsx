import useFetch from '../../utils/useFetch'
// import Loader from '../Loader/Loader'
// import Error404 from '../../pages/404/Error404'

function Banner({ userId }) {
  console.log('userId', userId)

  let url = `http://localhost:3000/user/${userId}`

  if (userId === '120' || userId === '180') {
    url = `../../../data/${userId}/user.json`
  }
  const { data } = useFetch(url)
  console.log('data007', data)
  // console.log('data008', data.data.userInfos.firstName)

  return (
    <div className="dashboard__title">
      <h1 className="dashboard__title--name">
        Bonjour <span>{data.data.userInfos.firstName}</span>
        {/* Bonjour <span>{userId}</span> */}
      </h1>
      <h2 className="dashboard__title--caption">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}

export default Banner
