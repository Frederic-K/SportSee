import useFetch from '../../utils/useFetch'
import Loader from '../Loader/Loader'
import Error404 from '../../pages/404/Error404'

function Banner({ userId }) {
  console.log('userId', userId)

  // let url = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_ENDPOINT}${userId}`

  let url = `http://localhost:3000/user/${userId}`

  if (userId === '122' || userId === '188') {
    url = `${process.env.PUBLIC_URL}/data/${userId}/user.json`
  }
  const { data } = useFetch(url)
  console.log('data007', data)

  return (
    <div className="dashboard__title">
      <h1 className="dashboard__title--name">
        {/* Bonjour <span>{firstName}</span> */}
        Bonjour <span>{userId}</span>
      </h1>
      <h2 className="dashboard__title--caption">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}

export default Banner
